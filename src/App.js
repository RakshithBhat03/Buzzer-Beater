import "./App.css";
import { Nav } from "./components/";
import { BLUE, DARK, DARK_BLUE, DEFAULT } from "./constants";
import { useTheme } from "./context";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`wrapper ${theme === DEFAULT && `theme-default`} ${
        theme === DARK && `theme-dark`
      }
      ${theme === BLUE && `theme-blue`}
      ${theme === DARK_BLUE && `theme-dark-blue`}`}>
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
