import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import { useRef } from "react";

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData } =
    useContext(Context);
  const input = useRef();

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="maincontainer">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>Summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="resulttitle">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>

              <div className="resultData">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div>
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
          ;
          <div className="mainbottom">
            <div className="searchbox">
              <input
                type="text"
                placeholder="Enter a prompt here"
                ref={input}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={() => {
                    const setinput = input.current.value;
                    onSent(setinput);
                    input.current.value = "";
                  }}
                />
              </div>
            </div>
            <p className="bottominfo">
              Gemini may display inaccurate info, including about people, so
              double-check its results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
