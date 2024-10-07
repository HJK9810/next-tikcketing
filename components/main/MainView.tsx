import styles from "@/styles/page.module.scss";
import {useState} from "react";
import {PageTap} from "@/types/EnumTypes";
import Ticketing from "@/components/main/Ticketing";
import MainTap from "@/components/main/MainTap";

function MainView() {
  const [tapType, setTapType] = useState<PageTap>('main')

  const tapPage = {
    main: <MainTap onChangeTap={(type: PageTap) => setTapType(type)} />,
    ticket: <Ticketing onMoveHome={() => setTapType('main')} />,
  }

  return (
    <div className={styles.page}>
      {tapPage[tapType]}
    </div>
  );
}

export default MainView;
