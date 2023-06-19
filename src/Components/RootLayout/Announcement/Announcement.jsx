import React, { useEffect } from "react";
import styles from "./Announcement.module.css";
import { useDispatch, useSelector } from "react-redux";
import { importMessage } from "../../../state/messageSlice";
import { db } from "../../../Firebase/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const Announcement = () => {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "message", "message"), (doc) => {
      const message = doc.data().message;
      dispatch(importMessage(message));
    });
    return () => {
      unsub();
    };
  }, [dispatch]);

  return (
    <div className={styles.announcement}>
      <h3>{message}</h3>
    </div>
  );
};

export default Announcement;
