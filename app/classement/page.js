const teams = [
  "Kansas City Chiefs",
  "Philadelphia Eagles",
  "Buffalo Bills",
  "Baltimore Ravens",
  "Detroit Lions",
  "San Francisco 49ers",
  "Cincinnati Bengals",
  "Dallas Cowboys",
  "Green Bay Packers",
  "Houston Texans",
  "Miami Dolphins",
  "Los Angeles Chargers",
  "Pittsburgh Steelers",
  "Minnesota Vikings",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Jacksonville Jaguars",
  "Atlanta Falcons",
  "Denver Broncos",
  "New York Jets",
  "Las Vegas Raiders",
  "Cleveland Browns",
  "New Orleans Saints",
  "Indianapolis Colts",
  "Los Angeles Rams",
  "Arizona Cardinals",
  "Carolina Panthers",
  "Chicago Bears",
  "New England Patriots",
  "New York Giants",
  "Tennessee Titans",
  "Washington Commanders"
];

export default function Classement() {
  return (
    <main>
      <h1>🏈 Le Foot US Média</h1>

      <h2>Power Ranking NFL</h2>

      <p>
        Classe les 32 équipes NFL de la meilleure à la moins bien classée.
      </p>

      <div>
        {teams.map((team, index) => (
          <div key={team}>
            <h3>#{index + 1}</h3>
            <p>{team}</p>
            <button>Déplacer</button>
          </div>
        ))}
      </div>
    </main>
  );
}
