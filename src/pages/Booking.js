import React, { useState, useEffect } from "react"
import ReservationForm from "../components/ReservationForm"
import ReservationList from "../components/ReservationList"


const Booking = () => {
	const [reservations, setReservations] = useState([])

	useEffect(() => {
		const savedReservations =
			JSON.parse(localStorage.getItem("reservations")) || []
		setReservations(savedReservations)
	}, [])

	const addReservation = (reservation) => {
		const updatedReservations = [...reservations, reservation]
		setReservations(updatedReservations)
		localStorage.setItem("reservations", JSON.stringify(updatedReservations))
	}

	return (
		<div className="booking-container">
			<h2>Table Reservation</h2>
			<ReservationForm addReservation={addReservation} />
			<ReservationList reservations={reservations} />
		</div>
	)
}

export default Booking
