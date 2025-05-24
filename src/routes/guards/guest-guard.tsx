import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { routePaths } from "../route-paths";
import { useAppSelector } from "../../app/hooks/rtk-hook";
import { selectUser } from "../../app/slices/auth/slice";

export const GuestGuard = () => {
  const isLoggedIn = Boolean(useAppSelector(selectUser));

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") ?? routePaths.dashboard.index;

  if (isLoggedIn) {
    return <Navigate to={redirect} />;
  }

  return <Outlet />;
};
