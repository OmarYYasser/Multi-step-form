import styles from "./PinnerPage.module.css";

function SpinnerPage() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default SpinnerPage;
