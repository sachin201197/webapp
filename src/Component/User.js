import { useContext, useState } from "react";
import { UserContext } from "./userContext";

const User = ({ userID }, { text1 }) => {
  const [text, setText] = useState("");
  const { chat, setChat } = useContext(UserContext);
  const handelSend = () => {
    const textValue = `${userID}: ${text}`;
    setChat([...chat, textValue]);
    setText("");
  };

  const handeltext = (e) => {
    setText(e.target.value);
  };

  const handelKeyPress = (e) => {
    if (e.key == "Enter") handelSend();
  };
  return (
    <div className={`user-box ${userID}`}>
      <h1>{userID}</h1>
      <input
        placeholder="Message"
        value={text}
        onKeyPress={handelKeyPress}
        onChange={handeltext}
      ></input>
      <button onClick={handelSend}>Send</button>
      <h1>{chat}</h1>
      {chat &&
        chat.map((item, index) => {
          return (
            <p className="text-data-align" key={index}>
              {item}
            </p>
          );
        })}
    </div>
  );
};

export default User;
