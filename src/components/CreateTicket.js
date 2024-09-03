import React, { useState } from 'react';
import '../App.css';

function CreateTicket({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    id: Date.now(), // Unique ID for the new ticket
    Assignee: '',
    Priority: 'Normal',
    Requester_mail: '',
    Ticket_status: 'OPEN',
    Subject: '',
    response: '',
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
      Assignee: '',
      Priority: 'Normal',
      Requester_mail: '',
      Ticket_status: 'OPEN',
      Subject: '',
      Response: '',
      
    });
    // Close the form after submission
    onClose();
  };

  return (
    <div className='create-ticket-form'>
      <button onClick={onClose} className='close-button create-button'>X</button>
      <form onSubmit={handleSubmit}>
        <div className='create-div'>
          <label htmlFor="Assignee">Assignee:</label>
          <select
            id="Assignee"
            name="Assignee"
            value={formData.Assignee}
            onChange={handleChange}
            required
          >
            <option value="">Select Assignee</option>
            <option value="Andrews">Andrews</option>
            <option value="David">David</option>
            <option value="Salena">Salena</option>
            
          </select>
        </div>
        <div className='create-div'>
          <label htmlFor="Priority">Priority:</label>
          <select
            id="Priority"
            name="Priority"
            value={formData.Priority}
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
          <label htmlFor="Requester_mail">Customer Email:</label>
          <input
            type="text"
            id="Requester_mail"
            name="Requester_mail"
            value={formData.Requester_mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className='create-div'>
          <label htmlFor="Ticket_status">Ticket Status:</label>
          <input
            type="text"
            id="Ticket_status"
            name="Ticket_status"
            value={formData.Ticket_status}
            onChange={handleChange}
            required
          />
        </div>
        <div className='create-div'>
          <label htmlFor="Subject">Subject:</label>
          <textarea
            id="Subject"
            name="Subject"
            value={formData.Subject}
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
