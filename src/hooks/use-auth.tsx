import { useAppDispatch } from "@/app/hooks/rtk-hook";
import { setUser } from "@/app/slices/auth/slice";

const useAuth = () => {
  // for testing purposes
  const dispatch = useAppDispatch();
  const storedUser = localStorage.getItem("user");
  const tranformedData = storedUser ? JSON.parse(storedUser) ?? null : null;
  console.log(tranformedData);
  dispatch(setUser(tranformedData));

  return { user: tranformedData };
};

export default useAuth;
