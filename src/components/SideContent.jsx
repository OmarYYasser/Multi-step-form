import { useSelector } from "react-redux";
import styles from "./SideContent.module.css";

function SideContent() {
  const index = useSelector((store) => store.stepForm.index);
  return (
    <div className={styles.sideContent}>
      <ul>
        <li className={`${index === 1 ? styles.active : ""}`}>
          <span>1</span> <span>step 1</span> <span>Your info</span>
        </li>
        <li className={`${index === 2 ? styles.active : ""}`}>
          <span>2</span> <span>step 2</span> <span>Select Plan</span>
        </li>
        <li className={`${index === 3 ? styles.active : ""}`}>
          <span>3</span> <span>step 3</span> <span>ADD-ONS</span>
        </li>
        <li className={`${index === 4 ? styles.active : ""}`}>
          <span>4</span> <span>step 4</span> <span>Summery</span>
        </li>
      </ul>
    </div>
  );
}

export default SideContent;
