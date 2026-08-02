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
function TeamCard({ team, index }) {
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
  src="/logos/chiefs.png"
  alt="Chiefs"
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
            />
          ))}
        </SortableContext>
      </DndContext>
          <button className="validate-button">
  Valider mon Power Ranking
</button>
    </main>
  );
}
