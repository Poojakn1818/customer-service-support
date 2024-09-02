import React, { useState } from "react";
import "../App.css";
import CreateTicket from "./CreateTicket";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

function Ticketing() {
  const [showCreateTicket, setShowCreateTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [formData, setFormData] = useState({});
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [data, setData] = useState([
    {
        id: 1,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 2,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 3,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 4,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 5,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 6,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 7,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 8,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 9,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 10,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 11,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 12,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 13,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
      {
        id: 14,
        Ticket_status: "OPEN",
        Subject: "SAMPLE TICKET: order delivery",
        Requester: "John Michael",
        Requested: "21/08/24",
        Priority: "Normal",
        Assignee: "Andrews",
        Updated: "22/08/24",
      },
  ]);

  const handleCreateTicketClick = () => {
    setShowCreateTicket(true);
  };

  const handleCloseForm = () => {
    setShowCreateTicket(false);
  };

  const handleTicketClick = (ticket, column) => {
    if (column === "Ticket_status" || column === "Subject") {
      setSelectedTicket(ticket);
      setFormData({
        id: ticket.id,
        assignee: ticket.Assignee,
        priority: ticket.Priority,
        customerName: ticket.Requester,
        ticketStatus: ticket.Ticket_status,
        description: `${ticket.Subject}`,
        response: "",
        orderDetails: "",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSave = (event) => {
    event.preventDefault();
    // Update data state with new values
    setData((prevData) =>
      prevData.map((ticket) =>
        ticket.id === formData.id
          ? {
              ...ticket,
              Assignee: formData.assignee,
              Priority: formData.priority,
              Requester: formData.customerName,
              Ticket_status: formData.ticketStatus,
              Subject: formData.description,
            }
          : ticket
      )
    );
    alert("Form saved successfully!");
    setSelectedTicket(null);
  };

  const handleFormCancel = () => {
    setSelectedTicket(null);
  };

  const allColumns = [
    "checkbox",
    "Ticket_status",
    "Subject",
    "Requester",
    "Requested",
    "Priority",
    "Assignee",
    "Updated",
  ];

  const handleCheckboxChange = (ticketId) => {
    setSelectedTickets((prevSelected) =>
      prevSelected.includes(ticketId)
        ? prevSelected.filter((id) => id !== ticketId)
        : [...prevSelected, ticketId]
    );
  };

  function TicketFilter({ tickets, onFilter }) {
    const [filters, setFilters] = useState({});
    const filterOptions = createFilterOptions({
      matchFrom: "start",
      stringify: (option) => option.title,
    });

    const handleFilterChange = (field, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [field]: value,
      }));


      const filteredTickets = tickets.filter((ticket) => {
        let statusMatch = true;

        if (value === "SOLVED") {
          statusMatch = ticket.Ticket_status === "CLOSED";
        } else if (value === "PENDING") {
          statusMatch = ticket.Ticket_status === "OPEN";
        } else if (value === "UNSOLVED") {
          statusMatch = ticket.Ticket_status === "OPEN";
        } else if (value === "All") {
          statusMatch = true;
        }

        return statusMatch;
      });

      onFilter(filteredTickets);
    };

    const statusOptions = [
      { title: "All" },
      { title: "SOLVED" },
      { title: "PENDING" },
      { title: "UNSOLVED" },
    ];
    
    return (
      <div>
        <Autocomplete
          options={statusOptions}
          getOptionLabel={(option) => option.title}
          filterOptions={filterOptions}
          sx={{ width: 200 }}
          onChange={(event, newValue) =>
            handleFilterChange("status", newValue?.title)
          }
          renderInput={(params) => (
            <TextField {...params} label={selectedStatus || "Ticket Status"} />
          )}
        />
      </div>
    );
  }

  const handleFilter = (filteredTickets) => {
    setFilteredData(filteredTickets);
  };

  return (
    <div>
      <div className="alignment">
        <TicketFilter tickets={data} onFilter={handleFilter} />
        <div className="CreateTicket-container">
          <button onClick={handleCreateTicketClick} className="button">
            Create Ticket
          </button>
          {showCreateTicket && (
            <div className="form-overlay">
              <CreateTicket onClose={handleCloseForm} />
            </div>
          )}
        </div>
      </div>
      <div className="ticket-count">
        <h3>Total Tickets: {filteredData ? filteredData.length : data.length}</h3>
      </div>
      <div className="table">
        <table className="ticketing-table">
          <thead className="table-header">
            <tr>
              {allColumns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(filteredData || data).map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedTickets.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                  
                </td>
                {allColumns.slice(1).map((col, colIndex) => (
                  <td
                    key={colIndex}
                    data-column={col}
                    onClick={() => handleTicketClick(row, col)}
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTicket && (
        <div className="form-overlay">
          <div className="ticket-details-form">
            <button
              className="close-button"
              onClick={() => setSelectedTicket(null)}
            >
              X
            </button>
            <h2>Ticket Details</h2>
            <form onSubmit={handleFormSave}>
            <div className="form-group">
            <label htmlFor="ticket-id">Ticket ID:</label>
            <input
              type="text"
              id="ticket-id"
              name="ticket-id"
              value={formData.id}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignee">Assignee:</label>
            <select
              id="assignee"
              name="assignee"
              value={formData.assignee}
              onChange={handleInputChange}
            >
              <option>Andrews</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option>High</option>
              <option>Normal</option>
              <option>Low</option>
              <option>Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="customer-name">Customer Name:</label>
            <input
              type="text"
              id="customer-name"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticket-status">Ticket Status:</label>
            <input
              type="text"
              id="ticket-status"
              name="ticketStatus"
              value={formData.ticketStatus}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="response">Response:</label>
            <textarea
              id="response"
              name="response"
              rows="4"
              value={formData.response}
              onChange={handleInputChange}
              placeholder="Enter your response"
            />
          </div>
          <div className="form-group">
            <label htmlFor="order-details">Order Details:</label>
            <textarea
              id="order-details"
              name="orderDetails"
              rows="4"
              value={formData.orderDetails}
              onChange={handleInputChange}
              placeholder="Enter order details"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleFormCancel}
            >
              Cancel
            </button>
          </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ticketing;
