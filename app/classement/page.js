"use client";
import "./style.css";

import { useState } from "react";
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
      className="team-card"
    >
      <h3>#{index + 1}</h3>
   
  <img
  src={`/logos/${teamLogos[team]}`}
  alt={team}
  className="team-logo"
/>
      <div>
  <p>{team}</p>
</div>
</div>
);
}

export default function Classement() {
  const [teams, setTeams] = useState(initialTeams);
const [afcTeams] = useState(AFCteams);
const [nfcTeams] = useState(NFCteams);
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
          <button className="validate-button">
  Valider mon Power Ranking
</button>
<h2>Classement AFC</h2>
<p>TEST AFC</p>
<p>TEST AFC</p>

{afcTeams.map((team, index) => (
  <div key={team} className="team-card">
    <span>{index + 1}</span>

    <img
      src={`/logos/${teamLogos[team]}`}
      alt={team}
      className="team-logo"
    />

    <p>{team}</p>
  </div>
))}

<h2>Classement NFC</h2>

{nfcTeams.map((team, index) => (
  <div key={team} className="team-card">

  <span className="team-rank">{index + 1}</span> 

    <img
      src={`/logos/${teamLogos[team]}`}
      alt={team}
      className="team-logo"
    />

    <p>{team}</p>

  </div>
))}
    </main>
  );
}
