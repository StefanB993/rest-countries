import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ message }) {
  return (
    <p className={styles.error}>
      <FontAwesomeIcon
        size="3x"
        className={styles.error__icon}
        icon={faExclamationTriangle}
      />{" "}
      <span className={styles.error__span}>{message}</span>
    </p>
  );
}

export default ErrorMessage;
