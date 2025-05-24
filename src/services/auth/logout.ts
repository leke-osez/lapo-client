import { useAppDispatch } from "@/app/hooks/rtk-hook";
import { setUser } from "@/app/slices/auth/slice";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  // to simulate signing, should not be used in production
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = () => {
    navigate("/signin");
    dispatch(setUser(null));
    localStorage.removeItem("user");
  };

  //   const {
  //     error,
  //     isPending: loading,
  //     mutateAsync: loginFn,
  //   } = useMutation({
  //     mutationFn: login,
  //     onSuccess: (data) => {
  //       if (data.status === "2fa_required") {
  //         void navigate("/auth/verify-otp");
  //         return;
  //       }

  //       setUser(data.user);
  //       queryClient.setQueryData(["user"], data.user);
  //     },
  //   });

  return { logout, loading: false, error: false };
};
