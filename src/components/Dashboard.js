import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashbord-stat">
        <div className="stats-card">
          <div>Number of Ticket Raised</div>
          <br />
          <div className="stats-card-count">150</div>
          <br />
          <div>
            <span style={{ color: "green" }}>+3%</span> than last month
          </div>
        </div>
        <div className="stats-card col-md-6">
          <div>Number of Ticket Pending</div>
          <br />
          <div className="stats-card-count">25</div>
          <br />
          <div>
            <span style={{ color: "green" }}>+1%</span> than yesterday
          </div>
        </div>
        <div className="stats-card col-md-6">
          <div>Number of Ticket Resolved</div>
          <br />
          <div className="stats-card-count">125</div>
          <br />
          <div>Just updated</div>
        </div>
      </div>
      <div className="chart-card blue">
        <div>Website Views</div>
        <div>Last Campaign Performance</div>
        <div className="chart">
          <LineChart
            sx={{ color: "white", background: "white", borderRadius: "5px" }}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width='280'
            height='230'
          />
        </div>
      </div>
      <div className="chart-card green">
        <div>Daily Sales</div>
        <div>(+15%) increase in today sales</div>
        <div className="chart">
          <LineChart
            sx={{ color: "white", background: "white", borderRadius: "5px" }}
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [4, 5.5, 6, 4.5, 9.5, 5],
              },
            ]}
            width='280'
            height='230'
          />
        </div>
      </div>
      <div className="chart-card black">
        <div>Completed Tasks</div>
        <div>Last Campaign Performance</div>
        <div className="chart">
          <BarChart
            sx={{ color: "black", background: "white", borderRadius: "5px" }}
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5], color: "#66bb6a" },
              { data: [1, 6, 3] },
              { data: [2, 5, 6], color: "blue" },
            ]}
            width='280'
            height='230'
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
