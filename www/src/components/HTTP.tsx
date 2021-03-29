import * as React from "react";

import { Table, Badge } from "react-bootstrap";

import { smallUrl } from "../utils"
import { Panel } from "./Panel";
import { Grade } from "./Grade";

type HTTPProps = { data: any };

const HttpRowBadge = (row: any) => {
  const severity = Math.abs(row.score_modifier);
  const variant =
    severity > 50
      ? "danger"
      : severity > 30
        ? "danger"
        : severity > 20
          ? "warning"
          : severity > 10
            ? "info"
            : "success";
  return (
    <Badge className="w-100" variant={variant}>
      {severity}
    </Badge>
  );
};

export const HTTP: React.FC<HTTPProps> = ({ data }) => {
  const url =
    (data && `https://observatory.mozilla.org/analyze/${smallUrl(data.url)}`) ||
    null;
  console.log(data)
  const failures = Object.keys(data.details)
    .filter((key) => !data.details[key].pass)
    .map((key) => data.details[key]);
  failures.sort((a, b) => a.score_modifier - b.score_modifier);

  return (
    url && (
      <Panel
        title="HTTP"
        info="Informations collectées par le Mozilla HTTP observatory"
        url={url}
      >
        <h3>Scan Summary : <Grade small grade={data.grade} /></h3>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>impact</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {failures.map((failure, i) => (
              <tr key={failure.name + i}>
                <td>{failure.name}</td>
                <td>
                  <HttpRowBadge {...failure} />
                </td>
                <td>{failure.score_description}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Panel>
    )
  );
};
