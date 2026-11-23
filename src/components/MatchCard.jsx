
function MatchCard({ team1, team2, date, venue, onBook }) {
  return (
    <div className="match-card">
      <h3>{team1} vs {team2}</h3>
      <p>📅 {date}</p>
      <p>📍 {venue}</p>
      <button onClick={() => onBook()}>🎟️ Book Tickets</button>
    </div>
  );
}

export default MatchCard;
