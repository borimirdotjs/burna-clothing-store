import styles from "./UpdateProfile.module.css";
import useAuth from "../../../Custom Hooks/useAuth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loader from "../../Loader";

const UpdateProfile = ({ toggle }) => {
  const [usersData, setUsersData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useAuth();
  console.log(currentUser.uid);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const userRef = doc(db, "users", `${currentUser?.uid}`);

      await updateDoc(userRef, {
        firstName,
        lastName,
        dateOfBirth,
        phone,
        subscribed,
      });

      setIsLoading(false);
      toast.success("Successfully Updated Profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const docRef = doc(db, "users", `${currentUser.uid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUsersData(docSnap.data());
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [currentUser.uid]);

  console.log(usersData);

  const disabled =
    !firstName && !lastName && !phone && !subscribed && !dateOfBirth;

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={handleUpdate} className={styles.profile_form}>
        <h4>Personal Info</h4>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={usersData.firstName}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={usersData.lastName}
        />
        <label htmlFor="mobile-phone">Phone Number</label>
        <input
          type="number"
          id="mobile-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={usersData.phone}
        />
        <label htmlFor="date-of-birth">Data of birth</label>
        <input
          type="date"
          onChange={(e) => setDateOfBirth(e.target.value)}
          placeholder={usersData.dateOfBirth}
        />
        <div>
          <input
            type="checkbox"
            id="newsletter"
            value={usersData.subscribed}
            onChange={() => setSubscribed(!subscribed)}
          />
          <label htmlFor="newsletter">Subscribe to news</label>
        </div>

        <button type="submit" onClick={handleUpdate} disabled={disabled}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
