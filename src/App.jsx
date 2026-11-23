
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import BookingForm from "./components/BookingForm";

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const matches = [
    { team1: "RCB", team2: "CSK", date: "25 March 2026", venue: "Bengaluru" },
    { team1: "MI", team2: "KKR", date: "26 March 2026", venue: "Mumbai" },
    { team1: "SRH", team2: "RR", date: "27 March 2026", venue: "Hyderabad" }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="matches-section">
        <h2>Upcoming Matches</h2>

        <div className="matches">
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              {...match}
              onBook={() => setSelectedMatch(match)}
            />
          ))}
        </div>
      </section>

      {selectedMatch && (
        <BookingForm
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </>
  );
}

export default App;
