import { useState } from "react";
import styles from "./Newsletter.module.css";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for that !", {
      icon: "🙏",
    });
    setUserEmail("");
  };

  return (
    <section>
      <form action="" className={styles.container}>
        <h2>
          <span>20%</span> OFF YOUR FIRST ORDER
        </h2>
        <label htmlFor="email">
          <div className={styles.email}>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="enter your email"
            />
            <button disabled={!userEmail} onClick={handleSubscribe}>
              subscribe
            </button>
          </div>
        </label>
        <p>
          Get access to special discounts, giveaways, and more. Subscribe to our
          newsletter and be in the loop.
        </p>
      </form>
    </section>
  );
};

export default Newsletter;
