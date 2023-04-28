import girl from "../../../images/banner-girl.png";
import styles from "./Banner.module.css";
import useAuth from "../../../Custom Hooks/useAuth";

const Banner = () => {
  const { currentUser } = useAuth();

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        {currentUser ? (
          currentUser.displayName ? (
            <h3>{currentUser.displayName.toUpperCase()},</h3>
          ) : null
        ) : null}
        <h1>
          STAND <span id={styles["out"]}>OUT.</span> <br />
          SPEAK <span id={styles["up"]}>UP.</span> <br />
          WEAR <span id={styles["burna"]}>BURNA.</span> <br />
        </h1>
      </div>
      <img className={styles.model} src={girl} alt="" />
    </section>
  );
};

export default Banner;
