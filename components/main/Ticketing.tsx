import styles from "@/styles/page.module.scss";

function Ticketing({ onMoveHome }: TicketingProps) {
  return (
    <div>
      <div onClick={onMoveHome}>Home</div>
      <main className={styles.main}>
        <div>Ticketing용 Table 설정</div>
      </main>
    </div>
  );
}

interface TicketingProps {
  onMoveHome: () => void;
}

export default Ticketing;
