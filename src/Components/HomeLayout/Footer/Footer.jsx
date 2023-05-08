import { useState } from "react";
import styles from "./Footer.module.css";
import { FiFigma, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import Disclaimer from "../../Disclaimer";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer>
      {isOpen && <Disclaimer isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>ABOUT</h3>
          <div className={styles.links}>
            <div className={styles.code}>
              <p>Code</p>
              <Link
                to="https://github.com/borimirdotjs/burna-clothing-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FiGithub />
                  GitHub
                </button>
              </Link>
            </div>
            <div className={styles.design}>
              <p>Design</p>
              <Link
                to="https://www.figma.com/file/p3x2Hl0XFXYjMv2cNxGo3x/Burna-Clothing-Store?type=design&node-id=0%3A1&t=Wb16JaLX8Ns4qlSN-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FiFigma /> Figma
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <svg
            width="22"
            height="30"
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1067 9.94408C16.4181 10.4685 17.5995 11.2357 18.5868 12.1903C20.5289 14.0668 21.7297 16.6584 21.7297 19.5214C21.7294 25.2435 16.9254 29.8852 11.0008 29.8852C5.07357 29.8852 0.270752 25.2435 0.270752 19.5211C0.270752 16.658 1.47307 14.0665 3.41373 12.1899C5.50905 10.1666 6.55671 7.51305 6.55671 4.8595C6.55671 3.45445 6.26335 2.11499 5.73895 0.892593C10.0007 3.64435 11.1483 9.21455 8.30053 13.3322C8.03263 13.72 7.90457 14.1585 7.90609 14.593C7.90799 15.3218 8.27203 16.0358 8.94729 16.4725C10.0231 17.1665 11.4785 16.8864 12.1974 15.8466C12.5451 15.3443 12.7097 14.7775 12.715 14.2158C12.7234 13.2416 12.2438 12.2816 11.3424 11.6999C13.9994 12.7632 15.5441 15.3179 15.3815 17.9431C17.4661 15.6411 17.3787 12.1406 15.1067 9.94408Z"
              fill="#fff"
            />
            <path
              d="M14.7359 4.96641C15.6688 3.61862 15.293 1.7939 13.8973 0.892593C13.8969 1.64459 13.5997 2.39658 13.0066 2.97027C11.8194 4.11693 11.8194 5.97681 13.0066 7.12383C13.317 7.42354 13.6955 7.6562 14.1154 7.80298C13.9463 6.85021 14.1352 5.83511 14.7359 4.96641Z"
              fill="#fff"
            />
          </svg>

          <h4>BURNA CLOTHING STORE · 2023 </h4>
          <span onClick={() => setIsOpen(true)}>DISCLAIMER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
