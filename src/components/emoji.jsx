import React from "react";

function Emoji(prompts) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={prompts.name}>
          {prompts.emoji}
        </span>
        <span>{prompts.name}</span>
      </dt>
      <dd>{prompts.meaning}</dd>
    </div>
  );
}

export default Emoji;
