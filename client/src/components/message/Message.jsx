import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={`message ${own ? "own" : ""}`}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">
        <p>{format(message.createdAt)}</p>
      </div>
    </div>
  );
};

export default Message;
