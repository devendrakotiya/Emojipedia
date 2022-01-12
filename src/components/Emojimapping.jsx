import React from "react";
import Entry from "./Entry";

function Emojimapping(dev) {
  return (
    <Entry
      key={dev.id}
      emoji={dev.emoji}
      name={dev.name}
      meaning={dev.meaning}
    />
  );
}

export default Emojimapping;
