import { useAppDispatch } from "../../app/hooks/rtk-hook";
import { setUser } from "../../app/slices/auth/slice";
import type { LoginDto } from "../../libs/dto/login";
// import { useNavigate } from "react-router-dom";

// export const login = async (data: LoginDto) => {
//     // const response = await axios.post<AuthResponseDto, AxiosResponse<AuthResponseDto>, LoginDto>(
//     //   "/auth/login",
//     //   data,
//     // );

//     return response.data;
//   };
export const useLogin = () => {
  // to simulate signing, should not be used in production
  const dispatch = useAppDispatch();
  const login = (data: LoginDto) => {
    const userdata = { userName: data.identifier };
    const jsonData = JSON.stringify(userdata);
    localStorage.setItem("user", jsonData);
    dispatch(setUser(userdata));
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

  return { login, loading: false, error: false };
};
