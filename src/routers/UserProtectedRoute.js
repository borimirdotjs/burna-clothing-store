import useAuth from "../Custom Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (!currentUser) {
    navigate("/login");
  } else {
    return children;
  }
};

export default UserProtectedRoute;
