const fs = require("fs");
const path = require("path");

const { getUrls, toHostname } = require("../utils");

const requireJson = (resultsPath, filename) => {
  try {
    return require(path.join("..", "..", resultsPath, filename));
  } catch (e) {
    return [];
  }
};

const smallUrl = (url) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\/?/, "")
    .replace(/\/$/, "");

const isSameUrl = (url1, url2) => smallUrl(url1) === smallUrl(url2);
const isSameHost = (url1, url2) => toHostname(url1) === toHostname(url2);
const removeKey = (obj, key) => {
  const { [key]: arg, ...others } = obj;
  return others;
};
const exportData = async (resultsPath) => {
  // aggregate results
  const allData = {
    http: requireJson(resultsPath, "http.json"),
    ssl: requireJson(resultsPath, "ssl.json"),
    trackers: requireJson(resultsPath, "trackers.json"),
    nuclei: requireJson(resultsPath, "nuclei.json"),
    geoip: requireJson(resultsPath, "geoip.json"),
    lhr: await getScansFiles(
      resultsPath,
      /^lhr-.*\.json$/,
      (node) => node.requestedUrl
    ),
    owasp: await getScansFiles(
      resultsPath,
      /^zap-.*\.json$/,
      (node) => node.site[0]["@host"]
    ),
  };

  // group by url, remove some data
  const byUrl = getUrls().reduce((a, currentUrl) => {
    return {
      ...a,
      [currentUrl]: {
        http: allData.http
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map((result) => ({
            ...result.result,
          })),
        ssl: allData.ssl
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map((result) => ({
            ...result.result,
          })),
        trackers: allData.trackers.filter((result) =>
          isSameUrl(currentUrl, result.url)
        ),
        nuclei: allData.nuclei
          .filter((result) => isSameUrl(currentUrl, result.host))
          .map(({ request, response, ...data }) => data), // strip some data
        lhr: allData.lhr
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map(({ url, filename, result }) => {
            const { requestedUrl, finalUrl, categories } = result;
            // strip some data
            const newCategories = Object.keys(categories).reduce(
              (a, key) => ({
                ...a,
                [key]: removeKey(categories[key], "auditRefs"),
              }),
              {}
            );
            return {
              url,
              filename,
              requestedUrl,
              finalUrl,
              categories: newCategories,
            };
          }),
        owasp: allData.owasp
          .filter((result) => isSameHost(currentUrl, result.url))
          .map((result) => ({
            ...result.result,
          })),
        geoip: allData.geoip.filter((result) =>
          isSameUrl(currentUrl, result.url)
        ),
      },
    };
  }, {});

  return byUrl;
};

const getScansFiles = (resultsPath, pattern, getUrl) => {
  const files = fs.readdirSync(resultsPath);
  return files
    .filter((filename) => filename.match(pattern))
    .map((filename) => {
      const data = requireJson(resultsPath, filename);
      const url = getUrl(data);
      return {
        url,
        filename,
        result: data,
      };
    });
};

if (require.main === module) {
  const input = process.argv[process.argv.length - 1];
  exportData(input)
    .then((d) => console.log(JSON.stringify(d, null, 2)))
    .catch(console.log);
}
