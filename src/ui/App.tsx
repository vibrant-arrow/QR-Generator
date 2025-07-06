import { useState } from "react";
import "./App.css";
import QRImage from "./QRCode";
import sample from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-window">
      <div className="workspace">
        <div className="configuration">
          <div className="options"></div>
        </div>
      </div>
      <div className="output-panel">
        <QRImage
          value="hellodhwoaihdowahoihawofhwadwafawfawffwa"
          logo={sample}
        ></QRImage>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
