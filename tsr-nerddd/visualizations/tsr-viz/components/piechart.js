import React from "react";
import { PieChart } from "nr1";

export default class Piechart extends React.Component {
  render() {
    const piechart1 = [
      {
        metadata: {
          id: "series-1",
          name: "Serie 1",
          color: "#a35ebf",
          viz: "main",
          units_data: {
            y: "BYTES",
          },
        },
        data: [{ y: 128 }],
      },
      {
        metadata: {
          id: "series-2",
          name: "Serie 2",
          color: "#85c956",
          viz: "main",
          units_data: {
            y: "BYTES",
          },
        },
        data: [{ y: 256 }],
      },
    ];
    // return <PieChart data={piechart1} fullWidth />;
    return (
      <PieChart
        accountId={4041902}
        query="SELECT latest(host.disk.usedPercent) as 'Used %' FROM Metric FACET device WHERE `entityGuid` = 'NDA0MTkwMnxJTkZSQXxOQXw3NzI3MzE1MzE0MTA0NDgwNTE5' LIMIT MAX"
        fullWidth
      />
    );
  }
}