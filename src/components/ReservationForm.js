import React, { useState } from "react"

const ReservationForm = ({ addReservation }) => {
	const [name, setName] = useState("")
	const [date, setDate] = useState("")
	const [time, setTime] = useState("")
	const [guests, setGuests] = useState(1)
	const [reason, setReason] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		const newReservation = { name, date, time, guests }
		addReservation(newReservation)

		// Reset Form
		setName("")
		setDate("")
		setTime("")
		setGuests(1)
		setReason("")
	}

	return (
		<form
			className="booking-form"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Your Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Reason for Reservation"
				value={reason}
				onChange={(e) => setReason(e.target.value)}
				required
			/>
			<input
				type="date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				required
			/>
			<input
				type="time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
				required
			/>
			<input
				type="number"
				min="1"
				max="10"
				value={guests}
				onChange={(e) => setGuests(e.target.value)}
				required
			/>
			<button type="submit">Book Now</button>
		</form>
	)
}

export default ReservationForm
