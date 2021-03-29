import * as React from "react";

import { Alert, Table } from "react-bootstrap";
import Flags from "country-flag-icons/react/3x2";

import { smallUrl } from "../utils";
import { Panel } from "./Panel";

type TrackersProps = { data: any };

type CookiesTableProps = { cookies: any[] };

const CookiesTable: React.FC<CookiesTableProps> = ({ cookies }) => (cookies && cookies.length && (
  <Table striped bordered hover style={{ marginBottom: 10 }}>
    <thead>
      <tr>
        <th className="bg-dark text-white" colSpan={4}>
          Cookies
          </th>
      </tr>
      <tr>
        <th>name</th>
        <th>domain</th>
        <th className="text-center">httpOnly</th>
        <th className="text-center">secure</th>
      </tr>
    </thead>
    <tbody>
      {cookies.map((cookie: any, i: number) => (
        <tr key={cookie.templateID + "" + i}>
          <td>{cookie.name}</td>
          <td>{cookie.domain}</td>
          <td className="text-center">
            {cookie.httpOnly ? "✔️" : "❌"}
          </td>
          <td className="text-center">
            {cookie.secure ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)) ||
  null

const smallLinkify = (url: string) => <a href={url}>{smallUrl(url).substring(0, 25) + "..."}</a>

type TrackersTableProps = { trackers: any[] };

const TrackersTable: React.FC<TrackersTableProps> = ({ trackers }) =>
  (trackers && trackers.length && (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="bg-dark text-white" colSpan={3}>
            Third-parties ressources
            </th>
        </tr>
        <tr>
          <th>type</th>
          <th>url</th>
          <th>remédiation</th>
        </tr>
      </thead>
      <tbody>
        {trackers.map((tracker: any, i: number) => {
          return (
            <tr key={tracker.url + i}>
              <td>{tracker.type}</td>
              <td>{smallLinkify(tracker.url)}</td>
              <td>{tracker.details && tracker.details.message}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  )) ||
  null

type EndPointsTableProps = { endpoints: any[] };

const EndPointsTable: React.FC<EndPointsTableProps> = ({ endpoints }) => <Table striped bordered hover style={{ marginBottom: 10 }}>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Hostname</th>
      <th>IP</th>
      <th>City</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    {endpoints.map(
      (endpoint: any, i: number) => {
        const Flag =
          (endpoint.geoip.country &&
            Flags[endpoint.geoip.country.iso_code]) ||
          null;
        return (
          <tr key={endpoint.hostname + "-" + endpoint.ip}>
            <td className="text-center">
              {Flag && (
                <Flag
                  style={{ width: 60 }}
                  title={endpoint.geoip.country.names.fr}
                />
              )}
            </td>
            <td>{endpoint.hostname}</td>
            <td>{endpoint.ip}</td>
            <td>
              {(endpoint.geoip.city && endpoint.geoip.city.names.fr) || "?"}
            </td>

            <td>
              {(endpoint.geoip.country && endpoint.geoip.country.names.fr) ||
                "?"}
            </td>
          </tr>
        );
      })}
  </tbody>
</Table>


export const Trackers: React.FC<TrackersProps> = ({ data }) => {
  const hasIssues = [...data.cookies, ...data.trackers].length > 0;
  return (
    (hasIssues && (
      <Panel title="Third parties" info="Scripts tiers embarqués dans la page web">
        <CookiesTable cookies={data.cookies} />
        <TrackersTable trackers={data.trackers} />
        <EndPointsTable endpoints={data.endpoints} />
      </Panel>
    )) || (
      <Panel title="Third parties" info="Scripts tiers embarqués dans la page web">
        <Alert variant="success">Aucun script third-party detecté</Alert>
      </Panel>
    )
  );
};
