import { useNavigate } from "react-router-dom";
import styles from "./ButtonBack.module.scss";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      Back
    </button>
  );
}

export default ButtonBack;
