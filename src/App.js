import "./styles.css";
import Input from "./Input";
import { useState } from "react";
export default function App() {
  const [query, setQuery] = useState("");
  const handleOnChange = (value) => {
    setQuery(value);
    console.log("querying API for ", value);
  };
  return (
    <div className="App">
      <h1>Debounced input component in react</h1>
      <h2>Start typing to see results debounced every 1 second</h2>

      <Input value={query} onChange={handleOnChange} />
      <h3>Query = {query} sent to server</h3>
    </div>
  );
}
