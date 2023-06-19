import useAuth from "../Custom Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();

  if (!currentUser) {
    navigate("/login");
  }
  if (currentUser && userData) {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminProtectedRoute;
