import styles from "../styles/page.module.scss";
import MainView from "@/components/main/MainView";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainView />
    </div>
  );
}
