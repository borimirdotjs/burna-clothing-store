import React, { useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import loginImg from "../images/illustration login.svg";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { auth, db } from "../Firebase/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Loader from "./Loader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const successIconsArray = ["🙌", "🎉", "🥳", "🚀", "✅", "🔥"];
  const randomIndex = Math.floor(
    Math.random() * (successIconsArray.length - 1)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
      setIsLoading(false);
      navigate("/");
      toast.success("Log in successfull", {
        icon: successIconsArray[randomIndex],
      });
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          authProvider: "google",
        });
      }
      navigate("/");
      toast.success("Logged in !", {
        icon: successIconsArray[randomIndex],
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      <div className={styles.image}>
        <img src={loginImg} alt="" />
      </div>
      <div className={styles.form_container}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <div>
            <AiOutlineUser className={styles.icon} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              placeholder="Type your email"
            />
          </div>
          <label htmlFor="password">Password:</label>
          <div>
            <AiFillLock className={styles.icon} />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Type your password"
            />
          </div>
          <p className={styles.forgot}>Forgot password ?</p>
          <button className={styles.login_btn} type="submit">
            LOGIN
          </button>
        </form>
        <p className="sign-up">Or Sign Up with</p>
        <button onClick={handleGoogle} className={styles.google_btn}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.6072 16.3209H34.3095V16.254H19.8095V22.6984H28.9147C27.5863 26.4499 24.0169 29.1429 19.8095 29.1429C14.4711 29.1429 10.1428 24.8146 10.1428 19.4762C10.1428 14.1378 14.4711 9.80956 19.8095 9.80956C22.2737 9.80956 24.5155 10.7392 26.2225 12.2576L30.7795 7.70061C27.9021 5.01892 24.0531 3.36511 19.8095 3.36511C10.9121 3.36511 3.69836 10.5789 3.69836 19.4762C3.69836 28.3736 10.9121 35.5873 19.8095 35.5873C28.7068 35.5873 35.9206 28.3736 35.9206 19.4762C35.9206 18.396 35.8094 17.3415 35.6072 16.3209Z"
              fill="#FFC107"
            />
            <path
              d="M5.55603 11.9773L10.8493 15.8593C12.2816 12.3132 15.7503 9.80956 19.8095 9.80956C22.2737 9.80956 24.5156 10.7392 26.2226 12.2576L30.7796 7.70061C27.9021 5.01892 24.0532 3.36511 19.8095 3.36511C13.6213 3.36511 8.25464 6.85881 5.55603 11.9773Z"
              fill="#FF3D00"
            />
            <path
              d="M19.8095 35.5873C23.971 35.5873 27.7522 33.9947 30.6112 31.4049L25.6248 27.1854C24.0072 28.4106 21.9966 29.1429 19.8095 29.1429C15.619 29.1429 12.0608 26.4709 10.7204 22.7419L5.46655 26.7899C8.13294 32.0074 13.5479 35.5873 19.8095 35.5873Z"
              fill="#4CAF50"
            />
            <path
              d="M35.6073 16.3208H34.3096V16.254H19.8096V22.6984H28.9148C28.2768 24.5004 27.1176 26.0544 25.6225 27.1862L25.6249 27.1846L30.6113 31.4041C30.2584 31.7247 35.9207 27.5317 35.9207 19.4762C35.9207 18.3959 35.8095 17.3415 35.6073 16.3208Z"
              fill="#1976D2"
            />
          </svg>
        </button>
        <span>
          No account ?
          <Link to="/register">
            <span className={styles.reg_link}> Sign Up</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
