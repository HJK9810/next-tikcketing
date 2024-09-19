import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Lotte World Ticketing</h1>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <div className={styles.primary}>티켓 발급</div>
          <div className={styles.secondary}>티켓 분석</div>
        </div>
      </main>
    </div>
  );
}
