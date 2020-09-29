import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, Input } from "@material-ui/core";

export default function App() {
  const [text, setText] = useState("");
  const [names, setName] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `${count} times`;
  });
  const submitForm = (e) => {
    setName(...names, text);
    setText("");
  };
  return (
    <div className="App">
      <Input onChange={(e) => setText(e.target.value)} value={text} />
      <Button
        disabled={!text}
        variant="contained"
        color="primary"
        onClick={submitForm}
      >
        Click Me
      </Button>
      <ul>
        {names.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
}
