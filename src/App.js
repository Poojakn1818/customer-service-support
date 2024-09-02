import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Ticketing from "./components/Ticketing";
import "./App.css";
import CustomerDetail from "./components/CustomerDetail";
import KnowledgeBase from "./components/KnowledgeBase";
import SLA from "./components/ServiceLevelAgreement";
import AgentDetails from "./components/AgentDetails";

function App() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "ticketing":
        return <Ticketing />;
      case "customerDetail":
        return <CustomerDetail />;
      case "knowledgeBase":
        return <KnowledgeBase />;
      case "sla":
        return <SLA />;
      case 'agentDetails':
        return <AgentDetails />
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <div className="App">
        <div>
          <Sidebar
            activeComponent={activeComponent}
            setActiveComponent={setActiveComponent}
          />
        </div>
        <div className="main-content">
          <Header className="" activeComponent={activeComponent} />
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
