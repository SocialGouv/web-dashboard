const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");
const omit = require("lodash.omit");

const { getUrls, toHostname } = require("../utils");

const requireJson = (resultsPath, filename) => {
  try {
    return require(path.join("..", "..", resultsPath, filename));
  } catch (e) {
    console.error("e", e);
    return [];
  }
};

const zapCleanup = (result) => ({
  ...result,
  site:
    result.site &&
    result.site.map((site) => {
      return {
        ...site,
        alerts: site.alerts.map((result) =>
          pick(result, ["name", "riskcode", "confidence", "riskdesc", "desc"])
        ),
      };
    }),
});

const cleanups = {
  nuclei: (result) => result.map((r) => omit(r, ["request", "response"])),
  zap: zapCleanup,
  lhr: (result) => {
    const { requestedUrl, finalUrl, categories, audits } = result;
    // strip some data
    const newCategories = Object.keys(categories).reduce(
      (a, key) => ({
        ...a,
        [key]: omit(categories[key], "auditRefs"),
      }),
      {}
    );
    return {
      requestedUrl,
      finalUrl,
      categories: newCategories,
      audits: pick(audits, ["metrics", "diagnostics"]),
    };
  },
};

const generateReport = () => {
  const urls = getUrls().map((url) => {
    const urlb64 = Buffer.from(url).toString("base64");
    const urlPath = path.join("results", urlb64);
    const scans = fs.readdirSync(urlPath);
    scans.sort().reverse();
    const lastScan = scans.length && scans[0];
    if (!lastScan) {
      return null;
    }
    const latestFilesPath = path.join(urlPath, lastScan);
    const latestFiles = fs.readdirSync(latestFilesPath);
    return {
      url,
      http: requireJson(latestFilesPath, "http.json"),
      ssl: requireJson(latestFilesPath, "ssl.json"),
      thirdparties: requireJson(latestFilesPath, "thirdparties.json"),
      zap: cleanups.zap(requireJson(latestFilesPath, "zap.json")),
      nuclei: cleanups.nuclei(requireJson(latestFilesPath, "nuclei.json")),
      lhr: cleanups.lhr(requireJson(latestFilesPath, "lhr.json")),
    };
  });
  return urls;
};

if (require.main === module) {
  const report = generateReport();
  console.log(JSON.stringify(report, null, 2));
}
