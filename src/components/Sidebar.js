import React from "react";
import {
  FaTachometerAlt,
  FaTicketAlt,
  FaHandshake,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import VTSLogo from "../images/logovts.png";

function Sidebar({ activeComponent, setActiveComponent }) {
  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="sidebar">
      <div className="logotext">
        <img src={VTSLogo} alt="" width="40px" height="40px" />
        <h2>VTS</h2>
      </div>
      <hr />
      <ul>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "dashboard" ? "active" : ""}
          onClick={() => handleClick("dashboard")}
        >
          <FaTachometerAlt size={18} style={{ marginRight: "10px" }} />
          Dashboard
        </li>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "ticketing" ? "active" : ""}
          onClick={() => handleClick("ticketing")}
        >
          <FaTicketAlt size={18} style={{ marginRight: "10px" }} />
          Help Desk and Ticketing
        </li>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "sla" ? "active" : ""}
          onClick={() => handleClick("sla")}
        >
          <FaHandshake size={18} style={{ marginRight: "10px" }} />
          Service Level Agreements
        </li>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "customerDetail" ? "active" : ""}
          onClick={() => handleClick("customerDetail")}
        >
          <FaUsers size={18} style={{ marginRight: "10px" }} />
          Customer Details
        </li>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "AgentDetails" ? "active" : ""}
          onClick={() => handleClick("agentDetails")}
        >
          <FaUsers size={18} style={{ marginRight: "10px" }} />
          Agent Details
        </li>
        <li
          style={{ display: "flex", alignItems: "center" }}
          className={activeComponent === "knowledgeBase" ? "active" : ""}
          onClick={() => handleClick("knowledgeBase")}
        >
          <FaBook size={18} style={{ marginRight: "10px" }} />
          Knowledge Base
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
