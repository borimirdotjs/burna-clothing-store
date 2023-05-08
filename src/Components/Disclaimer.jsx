import React from "react";
import { createPortal } from "react-dom";
import styles from "./Disclaimer.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Disclaimer = ({ isOpen, setIsOpen }) => {
  const handleParentClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return createPortal(
    <div className={styles.wrapper} onClick={handleParentClick}>
      <div className={styles.container}>
        <AiOutlineCloseCircle
          className={styles.close}
          onClick={() => setIsOpen(false)}
        />
        <p>
          This website is a dummy e-commerce store created for educational
          purposes only. It is not a real online store and no actual products or
          services are being sold. The website is intended to showcase the
          design, development, and coding skills of the creator as a portfolio
          project. Any information or content provided on the website should not
          be relied upon for any commercial or purchasing purposes. The creator
          of this website is not liable for any damages or losses resulting from
          the use or misuse of the website. Visitors are advised to use the
          website solely for educational and informational purposes.
        </p>
      </div>
    </div>,
    document.getElementById("disclaimer")
  );
};

export default Disclaimer;
