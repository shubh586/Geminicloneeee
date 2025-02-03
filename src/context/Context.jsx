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

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(prompt);
    const response = await runChat(prompt);
    let responseArray = response.split("**");
    let newResponse;
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
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
