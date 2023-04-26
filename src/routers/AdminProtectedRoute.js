import useAuth from "../Custom Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (!currentUser) {
    navigate("/login");
  } else if (currentUser.uid === "5Mm7hcf34xYY2zCa2szpePM1Yuo1") {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminProtectedRoute;
