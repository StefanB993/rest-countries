import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

function Header() {
  console.log("render");

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <h1 className={styles.header__main}>Where in the world?</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
