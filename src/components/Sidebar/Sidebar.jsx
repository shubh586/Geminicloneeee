import styles from "./Sidebar.module.css";
import { assets } from "../.././assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);

  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className={styles.newchat}>
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className={styles.recent}>
            <p className={styles.recenttitle}></p>
            <div className={styles.recententry}>
              <img src={assets.message_icon} alt="" />
              <p>What is react..</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.bottomitem} ${styles.recententry}`}>
          <img src={assets.question_icon} alt="" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className={`${styles.bottomitem} ${styles.recententry}`}>
          <img src={assets.history_icon} alt="" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className={`${styles.bottomitem} ${styles.recententry}`}>
          <img src={assets.setting_icon} alt="" />
          {extented ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
