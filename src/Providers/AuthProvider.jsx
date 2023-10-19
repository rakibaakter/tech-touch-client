import { createContext } from "react";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "rakiba" };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
