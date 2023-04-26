import React, { useEffect } from "react";
import "./Announcement.css";
import { useDispatch, useSelector } from "react-redux";
import { importMessage } from "../state/messageSlice";
import { db } from "../Firebase/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const Announcement = () => {
  const message = useSelector((state) => state.message.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "message", "message"), (doc) => {
      const message = doc.data().message;
      dispatch(importMessage(message));
      console.log(message);
    });
    return () => {
      unsub();
    };
  }, [dispatch]);

  return (
    <div className="announcement">
      <h3>{message}</h3>
    </div>
  );
};

export default Announcement;
