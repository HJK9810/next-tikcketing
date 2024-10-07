import styles from "@/styles/page.module.scss";
import {PageTap} from "@/types/EnumTypes";

function MainView({onChangeTap}: MainViewProps) {
  return (
    <>
      <h1>Lotte World Ticketing</h1>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <div className={styles.primary} onClick={() => onChangeTap('ticket')}>티켓 발급</div>
          <div className={styles.secondary} onClick={() => onChangeTap('ticket')}>티켓 분석</div>
        </div>
      </main>
    </>
  );
}

interface MainViewProps {
  onChangeTap: (type: PageTap) => void;
}

export default MainView;
