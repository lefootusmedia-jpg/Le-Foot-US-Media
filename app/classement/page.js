"use client";
import "./style.css";

import { useState, useEffect } from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialTeams = [
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
  "Washington Commanders",
];
const AFCteams = [
  "Kansas City Chiefs",
  "Buffalo Bills",
  "Baltimore Ravens",
  "Cincinnati Bengals",
  "Houston Texans",
  "Indianapolis Colts",
  "Jacksonville Jaguars",
  "Miami Dolphins",
  "New England Patriots",
  "New York Jets",
  "Pittsburgh Steelers",
  "Cleveland Browns",
  "Denver Broncos",
  "Las Vegas Raiders",
  "Los Angeles Chargers",
  "Tennessee Titans",
];

const NFCteams = [
  "Philadelphia Eagles",
  "Detroit Lions",
  "San Francisco 49ers",
  "Dallas Cowboys",
  "Green Bay Packers",
  "Minnesota Vikings",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Atlanta Falcons",
  "Carolina Panthers",
  "Chicago Bears",
  "New Orleans Saints",
  "Arizona Cardinals",
  "Los Angeles Rams",
  "New York Giants",
  "Washington Commanders",
];
const teamLogos = {
  "Kansas City Chiefs": "Chiefs.png",
  "Philadelphia Eagles": "eagles.png",
  "Buffalo Bills": "Bills.png",
  "Baltimore Ravens": "Ravens.png",
  "Detroit Lions": "Lions.png",
  "San Francisco 49ers": "49ers.png",
  "Cincinnati Bengals": "Bengals.png",
  "Dallas Cowboys": "Cowboys.png",
  "Green Bay Packers": "Packers.png",
  "Houston Texans": "Texans.png",
  "Miami Dolphins": "Dolphins.png",
  "Los Angeles Chargers": "Chargers.png",
  "Pittsburgh Steelers": "Steelers.png",
  "Minnesota Vikings": "Vikings.png",
  "Seattle Seahawks": "Seahawks.png",
  "Tampa Bay Buccaneers": "Buccaneers.png",
  "Jacksonville Jaguars": "Jaguars.png",
  "Atlanta Falcons": "Falcons.png",
  "Denver Broncos": "Broncos.png",
  "New York Jets": "Jets.png",
  "Las Vegas Raiders": "Raiders.png",
  "Cleveland Browns": "Browns.png",
  "New Orleans Saints": "Saints.png",
  "Indianapolis Colts": "Colts.png",
  "Los Angeles Rams": "Rams.png",
  "Arizona Cardinals": "Cardinals.png",
  "Carolina Panthers": "Panthers.png",
  "Chicago Bears": "Bears.png",
  "New England Patriots": "Patriots.png",
  "New York Giants": "Giants.png",
  "Tennessee Titans": "Titans.png",
  "Washington Commanders": "Commanders.png",
};
function TeamCard({ team, index, teamLogos }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: team });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

return (
 <div
  ref={setNodeRef}
  style={style}
  {...attributes}
  {...listeners}
  className={`team-card ${
    index === 0
      ? "gold"
      : index === 1
      ? "silver"
      : index === 2
      ? "bronze"
      : ""
  }`}
></div>
</span>

    <img
      src={`/logos/${teamLogos[team]}`}
      alt={team}
      className="team-logo"
    />

    <p className="team-name">{team}</p>
  </div>
);
}

export default function Classement() {
  const [teams, setTeams] = useState(initialTeams);
const [afcTeams] = useState(AFCteams);
const [nfcTeams] = useState(NFCteams);
useEffect(() => {
  const savedRanking = localStorage.getItem("powerRanking");

  if (savedRanking) {
    setTeams(JSON.parse(savedRanking));
  }
}, []);

useEffect(() => {
  localStorage.setItem("powerRanking", JSON.stringify(teams));
}, [teams]);
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTeams((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <main>
      <h1>🏈 Le Foot US Média</h1>

      <h2>Power Ranking NFL</h2>

      <p>
        Fais glisser les équipes pour créer ton classement personnel.
      </p>
<h2>🔥 Top 5 actuel</h2>
{teams.slice(0, 5).map((team, index) => (
  <div
  className={`team-card ${
    index === 0
      ? "gold"
      : index === 1
      ? "silver"
      : index === 2
      ? "bronze"
      : ""
  }`}
>
  <span className="rank-number">
    {index === 0
      ? "🥇"
      : index === 1
      ? "🥈"
      : index === 2
      ? "🥉"
      : `#${index + 1}`}
  </span>

  <img
    src={`/logos/${teamLogos[team]}`}
    alt={team}
    className="team-logo"
  />

  <p>{team}</p>
</div>
))}
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={teams}
          strategy={verticalListSortingStrategy}
        >
          {teams.map((team, index) => (
            <TeamCard
  key={team}
  team={team}
  index={index}
  teamLogos={teamLogos}
/>
            
          ))}
        </SortableContext>
      </DndContext>
          <div className="button-group">
  <button className="validate-button">
    Valider mon Power Ranking
  </button>

  <button
    className="share-button"
    onClick={() => {
      if (navigator.share) {
        navigator.share({
          title: "Mon Power Ranking NFL",
          text: "Voici mon Power Ranking NFL ! 🏈",
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Lien copié !");
      }
    }}
  >
    📤 Partager mon Power Ranking
  </button>
</div>
<h2 className="conference-title">
  <img
    src="/logos/AFC.png"
    alt="AFC"
    className="conference-logo"
  />
  Classement AFC
</h2>

{afcTeams.map((team, index) => (
  <TeamCard
    key={team}
    team={team}
    index={index}
    teamLogos={teamLogos}
  />
))}

<h2 className="conference-title">
  <img src="/logos/NFC.png" alt="NFC" className="conference-logo" />
  Classement NFC
</h2>

{nfcTeams.map((team, index) => (
  <TeamCard
    key={team}
    team={team}
    index={index}
    teamLogos={teamLogos}
  />
))}
    </main>
  );
}
