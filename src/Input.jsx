import { useRef, useState } from "react";

export default function ({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  const timer = useRef(null);

  const handleOnChange = (e) => {
    console.log("change", e.target.value);

    setInputValue(e.target.value);

    //debouncing code here
    timer?.current && window.clearTimeout(timer);
    timer.current = window.setTimeout(() => {
      onChange(e.target.value);
    }, 1000);
  };

  return <input value={inputValue} onChange={handleOnChange} />;
}
