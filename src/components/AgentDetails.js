import React, { useMemo, useState } from "react";
import '../App.css';
import axios from "axios";

function AgentDetails() {
    const [showCreateTicket, setShowCreateTicket] = useState(false);
    const columns = ["AgentName", "AgentDepartment",];
    const [data, setData] = useState([]);
    // const data = [
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     { Name: "John Michael", Department: "Support"},
    //     // Add more rows as needed
    //   ];

      const handleFetch = async() => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/agents/getAgents`);
          setData(res.data);
        } catch (error) {
          console.log(error);
        }
      } 

      useMemo(() => {handleFetch()}, []);

      return (
        <div>
          <div className='ticket-count'>
                    <h4>Total Agents: {data.length}</h4>
          </div>
        <div className="table">
        <table className="ticketing-table">
          <thead className="table-header">
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      );
    }
    
    export default AgentDetails;