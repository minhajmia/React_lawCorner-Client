import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>Loading.......</p>;
  }
  if (user) {
    return children;
  } else {
  }
};

export default PrivateRoute;
