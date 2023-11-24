import React, { useState } from "react";

export const NewEventForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [ampm, setAmPm] = useState("AM"); // Added state for AM/PM
  const [select, setSelect] = useState(""); // Added state for Select

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTime = time && ampm ? `${time} ${ampm}` : "";
    onSubmit(name, formattedTime, date, select);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
   
      <select value={ampm} onChange={(e) => setAmPm(e.target.value)}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        <option value="OT">OT</option>
        <option value="Full Day">Full Day</option>
      </select>
    
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="">Select</option>
        <option value="Aircon Servicing">Aircon Servicing</option>
        <option value="Repair Works">Repair Works</option>
        <option value="Site Projects">Site Projects</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewEventForm;
