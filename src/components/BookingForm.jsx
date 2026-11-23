
import { useState } from "react";

function BookingForm({ match, onClose }) {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Booking Confirmed!\nName: ${name}\nMatch: ${match.team1} vs ${match.team2}\nTickets: ${seats}`);
    onClose();
  }

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>🎟️ Book Tickets</h2>
        <h3>{match.team1} vs {match.team2}</h3>
        <p>📅 {match.date}</p>
        <p>📍 {match.venue}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            min="1"
            max="10"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            required
          />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
