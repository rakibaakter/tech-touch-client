import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const useAuthInfoHook = () => {
  const allInfo = useContext(AuthContex);
  // console.log(allInfo);

  return allInfo;
};

export default useAuthInfoHook;
