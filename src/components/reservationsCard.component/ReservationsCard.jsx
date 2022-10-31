import React from "react";
import "./reservationsCard.css"

export default function ReservationCard({reservation}){
    const {name, date, time, number} = reservation

    return(
    <div className="card-container">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>number of guests: {number}</p>
      <button className="cancel-button">Cancel</button>
    </div>)
}