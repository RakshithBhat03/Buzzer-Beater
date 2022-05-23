import React, { useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import { DARK, DEFAULT } from "../../constants";
import { setLocalStorage } from "../../utils/localStorage";

function Nav() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === DARK || theme === DEFAULT) {
      setLocalStorage("theme", theme);
    }
  }, [theme]);
  return (
    <header className="nav-wrapper">
      <div className="nav mx-auto display-flex align-items-center justify-content-between">
        <Link className="nav-title px-9 txt-md txt-white" to="/">
          <i className="fas fa-stopwatch"></i> Buzzer Beater
        </Link>
        <div className="nav-icons px-9 display-flex align-items-center gap-1">
          <a
            className="txt-white nav-icon p-5"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RakshithBhat03/Buzzer-Beater">
            <i className="fab fa-github"></i> Github
          </a>
          <button
            onClick={() =>
              theme === DEFAULT ? setTheme(DARK) : setTheme(DEFAULT)
            }
            className="txt-white nav-darkmode-icon p-5">
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export { Nav };
