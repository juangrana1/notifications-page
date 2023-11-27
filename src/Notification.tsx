import { useState } from "react";

function Notification(props: {
  className: string;
  unread: boolean;
  name: string;
  type: string;
  time: string;
  avatar: string;
  target?: string;
}) {
  const [isMessageAccessed, setIsMessageAccessed] = useState<boolean>(false);

  function messageClick() {
    if (props.type === "private-message") {
      setIsMessageAccessed(true);
    }
  }

  let message: string = "";
  let isPrivateMessage: boolean = false;
  let isImage: boolean = false;
  let isGroup: boolean = false;

  switch (props.type) {
    case "reaction":
      message = "reacted to your recent post";
      break;
    case "follow":
      message = "followed you";
      break;
    case "join-group":
      isGroup = true;
      message = "has joined your group";
      break;
    case "private-message":
      isPrivateMessage = true;
      message = "sent you a private message";
      break;
    case "comment-picture":
      isImage = true;
      message = "commented on your picture";
      break;
    case "left-group":
      isGroup = true;
      message = "left the group";
      break;
  }

  return (
    <div
      className={`${props.className} ${
        props.unread ? "notification--unread" : ""
      }`}
    >
      <div className={`notification__text ${isImage && 'notification__text--mobile'}`}>
        <span className="notification__text__name">{props.name} </span>
        <span
          className={`notification__text__message`}
        >
          {message}{" "}
        </span>
        {(props.type === "private-message" ||
          props.type === "comment-picture") &&
          props.unread && <div className="notification__point"></div>}
        {isPrivateMessage && (
          <div className="notification__time">{props.time}</div>
        )}
        {!isImage && (
          <div
            className={`notification__target-box ${
              isPrivateMessage
                ? "notification__target-box--private-message"
                : ""
            }`}
          >
            <span
              className={`notification__target-box__target ${
                isPrivateMessage
                  ? "notification__target-box__target--private-message"
                  : ""
              } ${isGroup ? "notification__target-box__target--group" : ""} ${
                props.type === "private-message" && isMessageAccessed
                  ? "notification__target-box__target--accessed-message"
                  : ""
              }`}
              onClick={messageClick}
            >
              {props.target}
            </span>
          </div>
        )}
        {props.unread &&
          props.type !== "private-message" &&
          props.type !== "comment-picture" && (
            <div className="notification__point"></div>
          )}
      </div>
      {!isPrivateMessage && (
        <div className="notification__time">{props.time}</div>
      )}
      {isImage && <img className="notification__image" src={props.target} />}
    </div>
  );
}

export default Notification;
