import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AdminAnnouncement.css";
import { setMessage } from "../../../state/messageSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const AdminAnnouncement = () => {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();
  const [localMessage, setLocalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageRef = doc(db, "message", "message");
    await updateDoc(messageRef, { message: localMessage });
    setLocalMessage("");
  };

  return (
    <div className="ann-container">
      <form onSubmit={handleSubmit}>
        <h2>Announcement Message</h2>
        <label>Current Message:</label>
        <div className="message">{message}</div>

        <label htmlFor="msg">Change Message:</label>
        <input
          type="text"
          id="msg"
          placeholder="New Message"
          value={localMessage}
          onChange={(e) => setLocalMessage(e.target.value.toUpperCase())}
        />
        <button disabled={!localMessage}>Change Message</button>
      </form>
    </div>
  );
};

export default AdminAnnouncement;
