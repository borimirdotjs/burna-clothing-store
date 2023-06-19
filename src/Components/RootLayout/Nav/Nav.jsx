import { MdAccountCircle, MdShoppingCart, MdHeartBroken } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import styles from "./Nav.module.css";
// import MobileMenu from "../../MobileMenu";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Custom Hooks/useAuth";
import { auth } from "../../../Firebase/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../../state/cartSlice";

const Nav = ({ toggle, setToggle }) => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const navigateHome = () => {
    navigate("/");
  };

  const handleSignOut = async () => {
    await signOut(auth);
    toast("Hope to see you soon !", {
      icon: "👋",
    });
    navigate("/");
  };

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo_container}>
          <svg
            onClick={navigateHome}
            className={styles.logo}
            width="168"
            height="47"
            viewBox="0 0 168 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fire"
              d="M15.1067 17.2909C16.418 17.8407 17.5994 18.6452 18.5867 19.6461C20.5289 21.6138 21.7297 24.3311 21.7297 27.3331C21.7293 33.333 16.9253 38.2 11.0008 38.2C5.07351 38.2 0.270691 33.333 0.270691 27.3328C0.270691 24.3308 1.47301 21.6134 3.41367 19.6457C5.50899 17.5242 6.55665 14.7418 6.55665 11.9595C6.55665 10.4862 6.26329 9.08174 5.73889 7.8C10.0006 10.6853 11.1482 16.5259 8.30047 20.8435C8.03257 21.2501 7.90451 21.7099 7.90603 22.1655C7.90793 22.9297 8.27197 23.6783 8.94723 24.1362C10.023 24.8639 11.4784 24.5702 12.1974 23.4799C12.5451 22.9533 12.7096 22.3589 12.7149 21.7699C12.7233 20.7485 12.2437 19.7419 11.3424 19.132C13.9993 20.2469 15.544 22.9255 15.3814 25.6782C17.4661 23.2645 17.3787 19.5941 15.1067 17.2909Z"
              fill="#182526"
            />
            <path
              className="fire"
              d="M14.7358 12.0716C15.6687 10.6584 15.2929 8.74506 13.8971 7.8C13.8967 8.5885 13.5996 9.377 13.0064 9.97854C11.8193 11.1809 11.8193 13.131 13.0064 14.3337C13.3169 14.648 13.6953 14.8919 14.1152 15.0458C13.9461 14.0468 14.135 12.9824 14.7358 12.0716Z"
              fill="#182526"
            />
            <path
              className="logo-title"
              d="M52.6 30.72C52.6 32.4267 52.1333 33.8133 51.2 34.88C50.2933 35.9467 49.0667 36.7333 47.52 37.24C45.9733 37.7467 44.2667 38 42.4 38H28.44V9.6H44.92C46.2533 9.6 47.4 9.96 48.36 10.68C49.3467 11.3733 50.0933 12.28 50.6 13.4C51.1333 14.52 51.4 15.68 51.4 16.88C51.4 18.1867 51.0533 19.4533 50.36 20.68C49.6933 21.9067 48.68 22.8267 47.32 23.44C48.9467 23.92 50.2267 24.76 51.16 25.96C52.12 27.16 52.6 28.7467 52.6 30.72ZM44.68 29.12C44.68 28.64 44.5867 28.2267 44.4 27.88C44.24 27.5067 44.0133 27.2133 43.72 27C43.4267 26.7867 43.08 26.68 42.68 26.68H36.24V31.44H42.4C42.8267 31.44 43.2133 31.3467 43.56 31.16C43.9067 30.9733 44.1733 30.7067 44.36 30.36C44.5733 30.0133 44.68 29.6 44.68 29.12ZM36.24 16.24V20.6H41.56C41.9067 20.6 42.24 20.5467 42.56 20.44C42.88 20.3067 43.1467 20.08 43.36 19.76C43.5733 19.44 43.68 18.9867 43.68 18.4C43.68 17.8667 43.5867 17.4533 43.4 17.16C43.24 16.84 43.0133 16.6133 42.72 16.48C42.4533 16.32 42.1467 16.24 41.8 16.24H36.24ZM68.4572 38.24C66.1905 38.24 64.2439 37.8667 62.6172 37.12C60.9905 36.3733 59.6572 35.3467 58.6172 34.04C57.6039 32.7333 56.8572 31.24 56.3772 29.56C55.8972 27.8533 55.6572 26.0667 55.6572 24.2V9.6H63.4572V24.2C63.4572 25.1333 63.5505 26.0267 63.7372 26.88C63.9239 27.7333 64.2172 28.4933 64.6172 29.16C65.0172 29.8267 65.5239 30.36 66.1372 30.76C66.7772 31.1333 67.5505 31.32 68.4572 31.32C69.3905 31.32 70.1772 31.1333 70.8172 30.76C71.4572 30.36 71.9639 29.8267 72.3372 29.16C72.7372 28.4667 73.0305 27.6933 73.2172 26.84C73.4039 25.9867 73.4972 25.1067 73.4972 24.2V9.6H81.2972V24.2C81.2972 26.1733 81.0305 28.0133 80.4972 29.72C79.9905 31.4267 79.2172 32.92 78.1772 34.2C77.1372 35.48 75.8039 36.48 74.1772 37.2C72.5772 37.8933 70.6705 38.24 68.4572 38.24ZM85.7838 38V9.6H98.8238C100.21 9.6 101.49 9.88 102.664 10.44C103.837 11 104.85 11.76 105.704 12.72C106.557 13.6533 107.21 14.7067 107.664 15.88C108.144 17.0533 108.384 18.24 108.384 19.44C108.384 20.5333 108.224 21.5867 107.904 22.6C107.584 23.6133 107.117 24.5467 106.504 25.4C105.89 26.2267 105.157 26.9467 104.304 27.56L110.304 38H101.744L96.7438 29.28H93.5838V38H85.7838ZM93.5838 22.48H98.5038C98.8238 22.48 99.1304 22.36 99.4238 22.12C99.7171 21.88 99.9571 21.5333 100.144 21.08C100.357 20.6267 100.464 20.08 100.464 19.44C100.464 18.7733 100.344 18.2267 100.104 17.8C99.8904 17.3467 99.6104 17 99.2638 16.76C98.9438 16.52 98.6238 16.4 98.3038 16.4H93.5838V22.48ZM120.576 24.04V38H112.776V9.6H118.856L130.256 24.04V9.6H138.056V38H131.856L120.576 24.04ZM149.492 9.6H158.212L167.252 38H159.332L157.612 32.44H150.052L148.372 38H140.412L149.492 9.6ZM156.372 27.24L153.852 17.24L151.212 27.24H156.372Z"
              fill="#182526"
            />
          </svg>
        </div>
        <div className={styles.menu}>
          {currentUser && userData?.userRoles?.includes("admin") ? (
            <button
              className={styles.admin_btn}
              onClick={() => navigate("/admin")}
            >
              ADMIN
            </button>
          ) : null}
          <div className={styles.menu_item}>
            <NavLink
              className="nav_link"
              to={!currentUser ? "/login" : "/account"}
            >
              <MdAccountCircle className={styles.menu_icon} />
              <span>{currentUser ? "Account" : "Log In"}</span>
            </NavLink>
          </div>
          <div className={styles.menu_item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav_link active" : "nav_link"
              }
              to="/wishlist"
            >
              <MdHeartBroken className={styles.menu_icon} />
              <span>Wishlist</span>
            </NavLink>
          </div>
          <div
            className={`${styles.menu_item} ${styles.cart_icon}`}
            onClick={() => dispatch(setIsCartOpen())}
          >
            {cart.length > 0 && (
              <span className={styles.cart_items_number}>
                {cart.reduce((acc, curr) => acc + curr.count, 0)}
              </span>
            )}
            <MdShoppingCart className={styles.menu_icon} />
            <span className={styles.cart_name}>Cart</span>
          </div>
          {currentUser && (
            <div className={styles.menu_item} onClick={handleSignOut}>
              <GoSignOut className={styles.menu_icon} />
              <span>Logout</span>
            </div>
          )}

          <div className={styles.menu_mobile}>
            {toggle ? (
              <GrClose onClick={() => setToggle(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  setToggle(true);
                }}
              />
            )}
          </div>
        </div>
      </nav>
      {/* <MobileMenu toggle={toggle} setToggle={setToggle} /> */}
    </>
  );
};

export default Nav;
