import React, { useState } from "react";
import styles from "./Footer.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer>
      <div className={styles.info}></div>
      <div className={styles.wrapper}>
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
    </footer>
  );
};

export default Footer;
