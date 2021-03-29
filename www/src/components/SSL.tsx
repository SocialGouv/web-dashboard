import * as React from "react";

import { Row, Col, Alert, Table } from "react-bootstrap";

import { Panel } from "./Panel";
import { Grade } from "./Grade";

type SSLProps = { data: any };

export const SSL: React.FC<SSLProps> = ({ data }) => {
  const url =
    (data && data.endpoints &&
      `https://www.ssllabs.com/ssltest/analyze.html?d=${data.host}`) ||
    null;
  return (
    url && (
      <Panel title="SSL" info="Informations collectées via SSLlabs" url={url}>
        <Row>
          <Col>
           <Table striped bordered hover>
        <thead>
          <tr>
            <th className="bg-dark text-white" colSpan={4}>
              SSL endpoints
            </th>
          </tr>
          <tr>
            <th>IP</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>

            {data.endpoints.map((endpoint: any, i: number) => {
              return (
                <tr key={endpoint.ipAddress}>
                 <td> {endpoint.ipAddress}</td>
                 <td>
                  
                    {(endpoint.statusMessage === "Ready" && (
                      <div>
                        <Grade grade={endpoint.grade} />
                        <br />
                        <br />
                        {endpoint.hasWarnings && (
                          <div>Certificate has WARNINGS</div>
                        )}
                      </div>
                    )) || (
                      <Alert variant="danger">
                        {endpoint.statusMessage}
                      </Alert>
                    )}
                  
                </td>
                </tr>
              );
            })}
            </tbody>
            </Table>
          </Col>
        </Row>
    
      </Panel>
    )
  );
};
