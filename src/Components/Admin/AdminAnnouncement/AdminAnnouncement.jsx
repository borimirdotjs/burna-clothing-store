import React, { useState } from "react";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";
import styles from "./AdminAnnouncement.module.css";
import { toast } from "react-hot-toast";

const AdminAnnouncement = () => {
  const message = useSelector((state) => state.message.message);
  const [localMessage, setLocalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageRef = doc(db, "message", "message");
    try {
      await updateDoc(messageRef, { message: localMessage });
      setLocalMessage("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className={styles.container}>
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
