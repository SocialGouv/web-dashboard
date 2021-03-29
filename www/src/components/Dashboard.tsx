import * as React from "react";

import { Alert, Table } from "react-bootstrap";
import { ExternalLink, Slash, Info, Search } from "react-feather";
import { Link } from "react-router-dom";
import Tooltip from "rc-tooltip";

import { Grade } from "./Grade";

import "rc-tooltip/assets/bootstrap.css";

const stripUrl = (url: string) => url.replace(/^(https?:\/\/)?(www\.)?/, "")

type DashboardProps = { report: any };

const remap = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const scoreToGrade = (score: number) => {
  const grades = "A,B,C,D,E,F".split(",");

  const newGrade = Math.min(
    grades.length - 1,
    Math.floor(remap(score, 0, 1, 0, 6))
  );

  return grades[newGrade];
};

const IconUnknown = () => <Slash size={20} />;

const getGradeTrackers = (count: number) => {
  return count > 10 ? "F" : count > 2 ? "C" : count > 0 ? "B" : "A";
};

const getGradeCookies = (count: number) => {
  return count > 10
    ? "F"
    : count > 5
      ? "E"
      : count > 2
        ? "C"
        : count > 0
          ? "B"
          : "A";
};

const getNucleiGrade = (events: any) => {
  return events.filter(
    (n: any) => n.info.severity === "critical" || n.info.severity === "high"
  ).length
    ? "F"
    : events.length
      ? "B"
      : "A";
};

const getOwaspGrade = (owaspAlerts: any) => {
  const maxSeverity = Math.max(
    ...owaspAlerts.map((o: any) => parseInt(o.riskcode) || 0)
  );

  return maxSeverity > 3
    ? "F"
    : maxSeverity > 2
      ? "D"
      : maxSeverity > 1
        ? "C"
        : maxSeverity > 0
          ? "B"
          : "A";
};

type ColumnHeaderProps = {
  title: string;
  info: string;
};

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, info }) => (
  <th className="text-center">
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      overlay={<span>{info}</span>}
    >
      <span>
        {title} <Info size={16} style={{ marginLeft: 5 }} />
      </span>
    </Tooltip>
  </th>
);

export const Dashboard: React.FC<DashboardProps> = ({ report }) => {
  //console.log('report', report)
  return (
    <div>
      <br />
      <Alert variant="info">
        Cliquez sur une des URLs pour obtenir le détail puis sur{" "}
        <ExternalLink size={16} /> pour accéder au rapport par produit. Si votre
        URL est manquante,{" "}
        <a
          href="https://github.com/SocialGouv/dnum-dashboard/issues/new"
          target="_blank"
          rel="noreferrer noopener"
        >
          ajoutez-là ici
        </a>
        .
      </Alert>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>url</th>
            <ColumnHeader
              title="Accessibilité"
              info="Bonnes pratiques en matière d'accessibilité web"
            />
            <ColumnHeader
              title="Performance"
              info="Performances de chargement des pages web"
            />
            <ColumnHeader
              title="SEO"
              info="Bonnes pratiques en matière de référencement naturel"
            />
            <ColumnHeader
              title="SSL"
              info="Niveau de sécurité du certificat SSL"
            />
            <ColumnHeader
              title="HTTP"
              info="Bonnes pratiques de configuration HTTP"
            />
            <ColumnHeader
              title="OWASP"
              info="Bonnes pratiques de sécurité OWASP"
            />
            <ColumnHeader
              title="Trackers"
              info="Nombre de scripts externes présents"
            />
            <ColumnHeader title="Cookies" info="Nombre de cookies présents" />
            <ColumnHeader title="Nuclei" info="Erreurs de configuration" />
          </tr>
        </thead>
        <tbody>
          {report.map((urlReport: any) => {
            // compute values

            // LightHouse
            const lhrCategories =
              urlReport.lhr && urlReport.lhr.categories;
            const a11y =
              lhrCategories && (lhrCategories.accessibility.score as number);
            const webPerf =
              lhrCategories && (lhrCategories.performance.score as number);
            const seo = lhrCategories && (lhrCategories.seo.score as number);

            // SSL
            const ssl =
              urlReport.ssl &&
              urlReport.ssl.endpoints &&
              urlReport.ssl.endpoints.length &&
              urlReport.ssl.endpoints[0].grade;

            // HTTP
            const http = urlReport.http && urlReport.http.grade;

            // OWASP
            const owaspAlerts =
              (urlReport.zap &&
                urlReport.zap.site.flatMap((site: any) =>
                  site.alerts.filter((a: any) => a.riskcode !== "0")
                )) ||
              [];
            const owaspCount = urlReport.zap && owaspAlerts.length;
            const owaspGrade = getOwaspGrade(owaspAlerts);

            // TRACKERS
            const trackersCount =
              (urlReport.thirdparties &&
                urlReport.thirdparties.trackers && urlReport.thirdparties.trackers.length) ||
              0;
            const trackersGrade = getGradeTrackers(trackersCount);

            // COOKIES
            const cookiesCount =
              (urlReport.thirdparties &&
                urlReport.thirdparties.cookies &&
                urlReport.thirdparties.cookies.length) ||
              0;
            const cookiesGrade = getGradeCookies(cookiesCount);

            // NUCLEI
            const nucleiCount = urlReport.nuclei.length;
            const nucleiGrade = getNucleiGrade(urlReport.nuclei);

            return (
              <tr key={urlReport.url}>
                <td>
                  <Link to={`/url/${encodeURIComponent(urlReport.url)}`}>
                    <Search size={16} /> {stripUrl(urlReport.url)}
                  </Link>
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - a11y)}
                      label={(a11y * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - webPerf)}
                      label={(webPerf * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {lhrCategories ? (
                    <Grade
                      small
                      grade={scoreToGrade(1 - seo)}
                      label={(seo * 100).toFixed() + " %"}
                    />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  {ssl ? <Grade small grade={ssl} /> : <IconUnknown />}
                </td>
                <td className="text-center">
                  {http ? <Grade small grade={http} /> : <IconUnknown />}
                </td>
                <td className="text-center">
                  {owaspCount ? (
                    <Grade small grade={owaspGrade} label={owaspCount} />
                  ) : (
                    <IconUnknown />
                  )}
                </td>
                <td className="text-center">
                  <Grade small grade={trackersGrade} label={trackersCount} />
                </td>
                <td className="text-center">
                  <Grade small grade={cookiesGrade} label={cookiesCount} />
                </td>
                <td className="text-center">
                  <Grade small grade={nucleiGrade} label={nucleiCount} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
