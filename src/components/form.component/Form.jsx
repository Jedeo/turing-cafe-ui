import React, { useState, useEffect } from "react";
import "./form.css";

export default function Form({ getNewReservation }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");

  const getName = (event) => {
    setName(event.currentTarget.value);
  };

  const getDate = (event) => {
    setDate(event.currentTarget.value);
  };

  const getTime = (event) => {
    setTime(event.currentTarget.value);
  };

  const getNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  
  const sendRes = (event) => {
    event.preventDefault()
    const allData = {
        id: Date.now() + Math.random(),
        name: name,
        date: date,
        time: time,
        number: number,
      };
    getNewReservation(allData)
  }

  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => getName(event)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter date ex.4/12"
        onChange={(event) => getDate(event)}
        value={date}
      />
      <input
        type="text"
        placeholder="Enter Time ex.6:30"
        onChange={(event) => getTime(event)}
        value={time}
      />
      <input
        type="text"
        placeholder="Enter of guest"
        onChange={(event) => getNumber(event)}
        value={number}
      />
      <button
        className="submit-button"
        onClick={(event) => sendRes(event)}
      >
        Submit
      </button>
    </form>
  );
}
