import { useState } from "react";

export default function ({ value, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    setInputValue(e.target.value);
    console.log(e.target);
  };

  return <input value={inputValue} onChange={handleKeyPress} />;
}
