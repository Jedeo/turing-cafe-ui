import React, { useState, useEffect } from "react";
import getReservations from "../../apisCall/getReservations";
import ReservationCard from "../reservationsCard.component/ReservationsCard";
import "./home.css";

export default function Home({newRes}) {
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    const displayData = async () => {
      const reservations = await getReservations();
      setReservation([...newRes,...reservations]);
    };
    displayData();
  });
  //const newCard = <ReservationCard key={newRes.id} reservation={newRes}/>
  const allReservation = reservations.map((reservation) => {
    return <ReservationCard key={reservation.id} reservation={reservation} />;
  });

  return <div className="cards-container">
    
    {allReservation}</div>;
}
