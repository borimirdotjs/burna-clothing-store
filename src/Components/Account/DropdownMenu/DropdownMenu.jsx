import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownMenu = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.clicker} onClick={() => setToggle(!toggle)}></div>
      <div className={styles.name}>
        <h3>{props.name}</h3>
        <IoMdArrowDropdown
          className={styles.dropdown_icon}
          style={{ transform: toggle ? "rotate(180deg)" : "" }}
        />
      </div>
      <div className={styles.menu} style={{ marginTop: toggle ? "2rem" : "" }}>
        {toggle && props.children}
      </div>
    </div>
  );
};

export default DropdownMenu;
