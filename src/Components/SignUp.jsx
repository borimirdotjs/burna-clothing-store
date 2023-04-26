import { useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import signUpImg from "../images/Robot signing up 1.svg";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { toast } from "react-hot-toast";
import { auth, db, storage } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Loader from "./Loader";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const successIconsArray = ["🙌", "🎉", "🥳", "🚀", "✅", "🔥"];
  const randomIndex = Math.floor(
    Math.random() * (successIconsArray.length - 1)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user !== null) {
        updateProfile(user, {
          displayName: nickname,
        });
      }
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: nickname,
        email,
      });

      toast.success("Successfully created an account", {
        icon: successIconsArray[randomIndex],
      });
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      {isLoading && <Loader />}
      <div className="form-container">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <div className="email-input">
            <AiOutlineUser className="icon" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              placeholder="Type your email"
            />
          </div>
          <label htmlFor="signup-password">Password:</label>
          <div className="password-input">
            <AiFillLock className="icon" />
            <input
              id="signup-password"
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label htmlFor="signup-confirm-password">Confirm Password:</label>
          <div className="password-input">
            <AiFillLock className="icon" />
            <input
              id="signup-confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <label htmlFor="nickname">Nickname:</label>
          <div className="password-input">
            <VscSmiley className="icon" />
            <input
              id="nickname"
              type="text"
              placeholder="How do you like to be called ?"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            REGISTER
          </button>
        </form>

        <span>
          Already got an account ?
          <Link to="/login">
            <span className="reg-link"> Log In</span>
          </Link>
        </span>
      </div>
      <div className="signup-image">
        <img src={signUpImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
