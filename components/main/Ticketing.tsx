import styles from "@/styles/page.module.scss";
import TicketTable from "@/components/Ticketing/TicketTable";
import TicketType from "@/components/Ticketing/TicketType";

function Ticketing({ onMoveHome }: TicketingProps) {
  return (
    <div>
      <main className={styles.main}>
        <TicketType />
        <TicketTable />
        <div className={styles.ctas}>
          <div className={styles.secondary} onClick={onMoveHome}>
            취소
          </div>
          <div className={styles.primary} onClick={onMoveHome}>
            다음
          </div>
        </div>
      </main>
    </div>
  );
}

interface TicketingProps {
  onMoveHome: () => void;
}

export default Ticketing;
