import React, { useState } from 'react';
import '../App.css';

function CreateTicket({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    id: Date.now(), // Unique ID for the new ticket
    assignee: '',
    priority: 'Normal',
    customerName: '',
    ticketStatus: 'OPEN',
    description: '',
    response: '',
    orderDetails: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Call the onCreate function passed from parent to add the new ticket
    onCreate(formData);
    // Optionally clear form data
    setFormData({
      id: Date.now(), // Reset ID for new ticket
      assignee: '',
      priority: 'Normal',
      customerName: '',
      ticketStatus: 'OPEN',
      description: '',
      response: '',
      orderDetails: ''
    });
    // Close the form after submission
    onClose();
  };

  return (
    <div className='create-ticket-form'>
      <button onClick={onClose} className='close-button create-button'>X</button>
      <form onSubmit={handleSubmit}>
        <div className='create-div'>
          <label htmlFor="assignee">Assignee:</label>
          <select
            id="assignee"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            required
          >
            <option value="">Select Assignee</option>
            <option value="Andrews">Andrews</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className='create-div'>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
          >
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
        <div className='create-div'>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='create-div'>
          <label htmlFor="ticketStatus">Ticket Status:</label>
          <input
            type="text"
            id="ticketStatus"
            name="ticketStatus"
            value={formData.ticketStatus}
            onChange={handleChange}
            required
          />
        </div>
        <div className='create-div'>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className='create-button'>Submit</button>
      </form>
    </div>
  );
}

export default CreateTicket;
