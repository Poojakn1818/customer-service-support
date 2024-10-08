import React from "react";
import '../App.css';

function CustomerDetail() {
  const columns = ["Name", "Email", "LastUpdated"];
  const data = [
    { Name: "John Michael", Email: "JohnMicheal@gmail.com", LastUpdated: "22/08/2024" },
    { Name: "John Michael", Email: "JohnMicheal@gmail.com", LastUpdated: "22/08/2024" },
    { Name: "John Michael", Email: "JohnMicheal@gmail.com", LastUpdated: "22/08/2024" },
    { Name: "John Michael", Email: "JohnMicheal@gmail.com", LastUpdated: "22/08/2024" },
  ];

  return (
    <div>
      <div className='ticket-count'>
                <h4>Total Customer: {data.length}</h4>
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

export default CustomerDetail;
