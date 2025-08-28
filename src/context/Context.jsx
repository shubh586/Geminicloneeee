import { createContext, useState } from "react";
import runChat from "../config/gemini";
import PropTypes from "prop-types";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

    const startNewChat = () => {
    setCurrentChatId(Date.now().toString());
    setRecentPrompt("");
    setShowResult(false);
    setResultData("");
    setLoading(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    
    const response = await runChat(prompt);
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let response2 = newResponse.split("*").join("</>");
    setResultData(response2);
    setLoading(false);

    // Add to chat history
    const chatEntry = {
      id: currentChatId || Date.now().toString(),
      prompt: prompt,
      response: response2,
      timestamp: new Date().toISOString(),
    };

    setChatHistory(prev => {
      const existingChatIndex = prev.findIndex(chat => chat.id === chatEntry.id);
      if (existingChatIndex !== -1) {
        // Update existing chat
        const updatedHistory = [...prev];
        updatedHistory[existingChatIndex] = chatEntry;
        return updatedHistory;
      } else {
        // Add new chat
        return [chatEntry, ...prev];
      }
    });

    if (!currentChatId) {
      setCurrentChatId(chatEntry.id);
    }
  };

  const loadChat = (chatId) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setRecentPrompt(chat.prompt);
      setResultData(chat.response);
      setShowResult(true);
    }
  };

  const deleteChat = (chatId) => {
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
    if (currentChatId === chatId) {
      startNewChat();
    }
  };

  const contextValue = {
    onSent,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    chatHistory,
    currentChatId,
    startNewChat,
    loadChat,
    deleteChat,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
