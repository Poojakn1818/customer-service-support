import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

function TicketFilter({ tickets, onFilter }) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });

  const handleFilterChange = (event, newValue) => {
    setSelectedFilter(newValue);
    const filteredTickets = tickets.filter((ticket) => {
      switch (newValue?.title) {
        case "All Tickets":
          return true;
        case "Unsolved Tickets":
          return ticket.Ticket_status !== "SOLVED";
        case "Unassigned Tickets":
          return !ticket.Assignee;
        case "Pending Tickets":
          return ticket.Ticket_status === "PENDING";
        default:
          return true;
      }
    });
    onFilter(filteredTickets);
  };

  const filterOptionsList = [
    { title: "All Tickets" },
    { title: "Unsolved Tickets" },
    { title: "Unassigned Tickets" },
    { title: "Pending Tickets" },
  ];

  return (
    <Autocomplete
      options={filterOptionsList}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      onChange={handleFilterChange}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
  );
}

export default TicketFilter;
