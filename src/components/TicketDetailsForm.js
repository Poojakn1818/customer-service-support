import React from "react";

function TicketDetailsForm({ formData, handleInputChange, handleFormSave, handleFormCancel }) {
  return (
    <div className="form-overlay">
      <div className="ticket-details-form">
        <button className="close-button" onClick={handleFormCancel}>
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
  );
}

export default TicketDetailsForm;
