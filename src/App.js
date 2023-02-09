import logo from "./logo.svg";
import "./App.css";
import User from "./Component/User";
import { createContext, useState } from "react";
import { UserContext } from "./Component/userContext";
import TextArea from "./Component/TextArea";
import { USER1, USER2, USER3 } from "./Component/constants";

function App() {
  var text = "";
  const [chat, setChat] = useState([]);
  document.title = "Chat-box";
  return (
    <>
      <UserContext.Provider value={{ chat, setChat }}>
        <h1 className="header">Chat - box - Demo</h1>
        <div className="App">
          <User userID={USER1} />
          <User userID={USER2} />
          <User userID={USER3} />
        </div>
        <TextArea />
      </UserContext.Provider>
    </>
  );
}

export default App;
