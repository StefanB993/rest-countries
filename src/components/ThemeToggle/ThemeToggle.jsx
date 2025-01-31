import styles from "./ThemeToggle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../contexts/ThemeContext";

function ThemeToggle() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles["toggle-btn"]}>
      <FontAwesomeIcon icon={isLightTheme ? faMoon : faSun} size="lg" />
      <span>{isLightTheme ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}

export default ThemeToggle;
