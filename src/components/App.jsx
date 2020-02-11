import React from "react";
import Emoji from "./emoji";
import emojipedia1 from "../emojipedia";

function getEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      name={emoji.name}
      meaning={emoji.meaning}
      emoji={emoji.emoji}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia1.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
