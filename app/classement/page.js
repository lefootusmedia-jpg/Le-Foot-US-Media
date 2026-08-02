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
      <h1>🏈 Power Ranking NFL</h1>

      <h2>Classe ton Top 32</h2>

      <p>
        Déplace les équipes pour créer ton classement personnel.
      </p>

      <div>
        {teams.map((team, index) => (
          <div key={team}>
            {index + 1}. {team}
          </div>
        ))}
      </div>
    </main>
  );
}
