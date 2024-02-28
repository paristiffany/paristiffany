import React, { useState, useEffect } from "react";
import "./style.css";

const Chatbox = () => {
  const [state, setState] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleState = (chatbox) => {
    setState(!state);

    // show or hide the box
    if (!state) {
      chatbox.classList.add("chatbox--active");
    } else {
      chatbox.classList.remove("chatbox--active");
    }
  };

  const onSendButton = (chatbox) => {
    var textField = chatbox.querySelector("input");
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }

    let msg1 = { name: "User", message: text1 };
    setMessages((prevMessages) => [...prevMessages, msg1]);

    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({ message: text1 }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        let msg2 = { name: "Sam", message: r.answer };
        setMessages((prevMessages) => [...prevMessages, msg2]);
        updateChatText(chatbox);
        textField.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
        updateChatText(chatbox);
        textField.value = "";
      });
  };

  const updateChatText = (chatbox) => {
    var html = "";
    messages
      .slice()
      .reverse()
      .forEach(function (item, index) {
        if (item.name === "Sam") {
          html += `<div class="messages__item messages__item--visitor">${item.message}</div>`;
        } else {
          html += `<div class="messages__item messages__item--operator">${item.message}</div>`;
        }
      });

    const chatmessage = chatbox.querySelector(".chatbox__messages");
    chatmessage.innerHTML = html;
  };

  useEffect(() => {
    const openButton = document.querySelector(".chatbox__button");
    const chatBox = document.querySelector(".chatbox__support");
    const sendButton = document.querySelector(".send__button");
    const node = chatBox.querySelector("input");

    openButton.addEventListener("click", () => toggleState(chatBox));

    sendButton.addEventListener("click", () => onSendButton(chatBox));

    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        onSendButton(chatBox);
      }
    });
  }, []);

  return (
    <div className="chatbox">
      {/* Your chatbox HTML structure goes here */}
      <button className="chatbox__button">
        <img src="./images/chatbox-icon.svg" alt="Chat" />
      </button>
      <div className={`chatbox__support ${state ? "chatbox--active" : ""}`}>
        {/* Your chatbox support HTML structure goes here */}
        <div className="chatbox__header">
          {/* Your chatbox header HTML structure goes here */}
          <div className="chatbox__image--header">
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
              alt="User"
            />
          </div>
          <div className="chatbox__content--header">
            <h4 className="chatbox__heading--header">Chat support</h4>
            <p className="chatbox__description--header">
              Hi. My name is Sam. How can I help you?
            </p>
          </div>
        </div>
        <div className="chatbox__messages">
          {/* Your chatbox messages HTML structure goes here */}
          {messages.map((item, index) => (
            <div
              key={index}
              className={`messages__item messages__item--${
                item.name === "Sam" ? "visitor" : "operator"
              }`}
            >
            </div>
          ))}
        </div>
        <div className="chatbox__footer">
          <input type="text" placeholder="Write a message..." />
          <button className="send__button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
