import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiWeKnow = {
    "🥰": " Smiling Face with Hearts",
    "❤️": " Heart",
    "😍": " Heart Eyes",
    "😆": " Grinning Squinting Face",
    "😜": " Winking Face with Tongue",
    "🤗": " Smiling Face with Open Hands",
    "🤔": " Thinking Face",
    "🥺": "Pleading Face"
  };
  var emojiArray = Object.keys(emojiWeKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    let emoji = e.target.value;
    emoji = emoji.trim(" ");
    var currentMeaning = emojiWeKnow[emoji];
    if (currentMeaning === undefined) {
      currentMeaning = "we do not have thi in our database";
    }
    setmeaning(currentMeaning);
  }

  function emojoClickEventHandler(emoji) {
    setmeaning(emojiWeKnow[emoji]);
  }
  return (
    <div className="App">
      <h1 id="heading">INSIDE OUT</h1>
      <input
        placeholder="put an emoji here to know the meaning of it"
        onChange={(event) => inputEventHandler(event)}
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          padding: "0.5rem",
          cursor: "pointer",
          width: "80%"
        }}
      />
      <p id="meaning">{meaning}</p>
      {emojiArray.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojoClickEventHandler(item)}
            style={{
              marginLeft: "0.7rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
