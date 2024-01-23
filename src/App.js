import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div>
      <h1 data-testid="value-el">{value}</h1>
      {toggle === true && <div data-testid="toggle-el">Toggle</div>}
      {data && <div style={{ color: "red" }}>Data</div>}
      <h1>Hi there</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        click me
      </button>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="input value"
      />
    </div>
  );
}

export default App;
