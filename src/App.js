import { Counter } from "./counter/Counter";
import CounterHook from "./components/CounterHook";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("red");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "red" ? "blue" : "red"));
  };

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter defaultValue={0} />
      <Counter defaultValue={5} />
      <CounterHook defaultValue={1} />
      <div>
        <button onClick={changeTheme}>Change theme</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
