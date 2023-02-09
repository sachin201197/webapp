import { UserContext } from "./userContext";
import { useContext, useState } from "react";

const TextArea = () => {
  const { chat } = useContext(UserContext);
  return (
    <div className="text-Area">
      <h1>3 Besties from JC to Life</h1>
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

export default TextArea;
