import styles from "./Account.module.css";
import UserInfo from "./UserInfo/UserInfo";
import useAuth from "../../Custom Hooks/useAuth";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Address from "./Address/Address";

const Account = () => {
  return (
    <>
      <div className={styles.container}>
        <UserInfo />
        <div className={styles.dropdown_container}>
          <DropdownMenu name="Update Info">
            <UpdateProfile />
          </DropdownMenu>
          <DropdownMenu name="Addresses">
            <Address />
          </DropdownMenu>
          <DropdownMenu name="Orders">
            <div>Comming soon!</div>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Account;
