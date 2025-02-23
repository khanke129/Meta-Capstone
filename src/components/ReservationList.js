import React from "react"


const ReservationList = ({ reservations }) => {
	return (
		<div className="reservation-list">
			<h3>Existing Reservations</h3>
			<ul>
				{reservations.length === 0 ? (
					<p>No reservations yet</p>
				) : (
					reservations.map((res, index) => (
						<li key={index}>
							{res.name} - {res.reason} reservation on {res.date} at {res.time} for {res.guests} people
						</li>
					))
				)}
			</ul>
		</div>
	)
}

export default ReservationList
