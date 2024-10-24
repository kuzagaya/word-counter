import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  
  const [warningText, setWarninigText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarninigText("No script tag allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarninigText("No @ symbol allowed!");
    } else {
        setWarninigText("")
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      {warningText ? <Warning warningText = {warningText}/> : null}
    </div>
  );
}
