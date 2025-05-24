import { Navigate, Outlet, useLocation } from "react-router-dom";
import { routePaths } from "../route-paths";
import useAuth from "@/hooks/use-auth";
import Spinner from "@/ui/components/spinner";
import { useEffect, useState } from "react";

const AuthGuard = () => {
  const location = useLocation();
  const redirectTo = location.pathname + location.search;
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // const { user, loading } = useUser();
  useEffect(() => setLoading(false), []);
  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (user) {
    return <Outlet />;
  }

  return (
    <Navigate replace to={`${routePaths.auth.signin}?redirect=${redirectTo}`} />
  );
};

export default AuthGuard;
