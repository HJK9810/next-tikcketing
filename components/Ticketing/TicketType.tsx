import styles from "@/styles/page.module.scss";

function TicketType() {
  return (
    <div className={styles.radio_button_group}>
      <label key="1Day">
        <span>1Day : </span>
        <input type="radio" id="1Day" name="ticketType"></input>
      </label>
      <label key="After4">
        <span>After4 : </span>
        <input type="radio" id="After4" name="ticketType"></input>
      </label>
    </div>
  );
}

export default TicketType;
