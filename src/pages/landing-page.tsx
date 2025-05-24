import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks/rtk-hook";
import { routePaths } from "../routes/route-paths";

const LandingPage = () => {
  const location = useLocation();
  const redirectTo = location.pathname + location.search;
  const user = useAppSelector((state) => state.auth.user) ?? null;

  // const { user, loading } = useUser();
  const loading = false;

  if (loading) return null;

  if (user) {
    return <Navigate replace to={`${routePaths.dashboard.index}`} />;
  }

  return (
    <Navigate replace to={`${routePaths.auth.signin}?redirect=${redirectTo}`} />
  );
};

export default LandingPage;
