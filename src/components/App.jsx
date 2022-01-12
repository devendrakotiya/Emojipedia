import React from "react";
import emojipedia from "../emojipedia";
import Emojimapping from "./Emojimapping";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Emojimapping)}</dl>
    </div>
  );
}
export default App;
