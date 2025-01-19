import { createContext, useState } from "react";
import "./App.css";
// import ChildA from './components/ChildA';
import ThemeSwitcher from "./components/ThemeSwitcher";

// Step 1 Create Context
// const UserContext = createContext();
const ThemeContext = createContext();

const App = () => {
  // Step 3 Pass the value
  // const [user, setUser] = useState({name: "Ram"});
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* Step 2 Wrap all the child inside the provider */}
      {/* <UserContext.Provider value={user}>
          <ChildA/>
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ThemeSwitcher />
        </div>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
// export {UserContext};
export { ThemeContext };
