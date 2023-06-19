import useAuth from "../../../Custom Hooks/useAuth";
import nouserpic from "../../../images/no-user-image.jpg";
import styles from "./UserInfo.module.css";
import { storage } from "../../../Firebase/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const AccountMenu = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const inputRef = useRef(null);

  const handleUpload = async () => {
    setIsLoading(true);
    const storageRef = ref(storage, `user-images/${currentUser.uid}userphoto`);
    await uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        updateProfile(currentUser, {
          photoURL: downloadURL,
        });
      });
    });
    setIsLoading(false);
    toast.success("Profile picture updated succesfully. Please refresh page.");
  };

  return (
    <div className={styles.user_container}>
      <div
        className={styles.profile_image}
        onClick={() => {
          inputRef.current.click();
        }}
      >
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {currentUser?.photoURL ? (
          <img src={currentUser.photoURL} />
        ) : (
          <img src={nouserpic} alt="no user" />
        )}
      </div>
      {file && (
        <button onClick={handleUpload} disabled={isLoading}>
          Update
        </button>
      )}

      <h3>Hi there, {currentUser?.displayName?.split(" ")[0]} 👋</h3>
    </div>
  );
};

export default AccountMenu;
