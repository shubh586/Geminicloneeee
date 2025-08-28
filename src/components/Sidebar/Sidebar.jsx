import styles from "./Sidebar.module.css";
import { assets } from "../.././assets/assets";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);
  const { chatHistory, setChatHistory, startNewChat, loadChat, deleteChat, currentChatId } = useContext(Context);

  const getRelativeTime = (timestamp) => {
    const now = new Date();
    const chatTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - chatTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return chatTime.toLocaleDateString();
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className={styles.newchat} onClick={startNewChat}>
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className={styles.recent}>
            <div className={styles.recentHeader}>
              <p className={styles.recenttitle}>Recent Chats ({chatHistory.length})</p>
              {chatHistory.length > 0 && (
                <button 
                  className={styles.clearAllBtn}
                  onClick={() => {
                    setChatHistory([]);
                    startNewChat();
                  }}
                >
                  Clear All
                </button>
              )}
            </div>
            {chatHistory.length === 0 ? (
              <div className={styles.recententry}>
                <img src={assets.message_icon} alt="" />
                <p>No chats yet</p>
              </div>
            ) : (
              chatHistory.map((chat) => (
                <div 
                  key={chat.id} 
                  className={`${styles.recententry} ${currentChatId === chat.id ? styles.activeChat : ''}`}
                  onClick={() => loadChat(chat.id)}
                >
                  <img src={assets.message_icon} alt="" />
                  <div className={styles.chatInfo}>
                    <p>{chat.prompt.length > 30 ? chat.prompt.substring(0, 30) + '...' : chat.prompt}</p>
                    <span className={styles.timestamp}>
                      {getRelativeTime(chat.timestamp)}
                    </span>
                  </div>
                  <button 
                    className={styles.deleteBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteChat(chat.id);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
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
          {extented ? <p>Activity ({chatHistory.length})</p> : null}
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
