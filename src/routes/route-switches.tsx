import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestGuard } from "./guards/guest-guard";
import { PRF, routePaths } from "./route-paths";
import AppLayout from "../pages/layouts/app-layout";
import DashboardPage from "../pages/dashboard/dashboard-page";
import RolesPage from "../pages/roles/roles-page";
import UsersPage from "../pages/users/users-page";
import CardPage from "../pages/card/card-page";
import BranchesPage from "../pages/branches/branches-page";
import CardRequestPage from "../pages/card-request/card-request-page";
import CardSchemePage from "../pages/card-scheme/card-scheme-page";
import StockPage from "../pages/stock/stock-page";
import TrailPage from "../pages/trail/trail-page";
import AccountsPage from "../pages/accounts/accounts-page";
import AuthorizationListPage from "../pages/authorization-list/authorization-list-page";
import AuthorizationQueue from "../pages/authorization-queue/authorization-queue-page";
import LandingPage from "../pages/landing-page";
import LoginPage from "../pages/auth/login/login";
import AuthGuard from "./guards/auth-guard";
import CardProfilePage from "../pages/card-profile/card-profile";
import CreateRolePage from "../pages/roles/create-role-page";

const RoutesSwitches = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<LandingPage />} path={`/${PRF}`} />
          {/* AUTH ROUTES */}
          <Route element={<GuestGuard />}>
            <Route path={routePaths.auth.signin} element={<LoginPage />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path={PRF} element={<AppLayout />}>
              <Route
                path={routePaths.dashboard.index}
                element={<DashboardPage />}
              />
              <Route path={routePaths.roles.index} element={<RolesPage />} />

              <Route path={routePaths.users.index} element={<UsersPage />} />
              <Route path={routePaths.cards.index} element={<CardPage />} />
              <Route
                path={routePaths.branches.index}
                element={<BranchesPage />}
              />
              <Route
                path={routePaths.cardProfile.index}
                element={<CardProfilePage />}
              />
              <Route
                path={routePaths.cardRequest.index}
                element={<CardRequestPage />}
              />
              <Route
                path={routePaths.cardScheme.index}
                element={<CardSchemePage />}
              />
              <Route path={routePaths.roles.index}>
                <Route path={""} element={<RolesPage />} />
                <Route
                  path={routePaths.roles.createRole}
                  element={<CreateRolePage />}
                />
              </Route>
              <Route path={routePaths.stock.index} element={<StockPage />} />
              <Route path={routePaths.trail.index} element={<TrailPage />} />
              <Route
                path={routePaths.account.index}
                element={<AccountsPage />}
              />
              <Route
                path={routePaths.authorizationList.index}
                element={<AuthorizationListPage />}
              />
              <Route
                path={routePaths.authorizationQueue.index}
                element={<AuthorizationQueue />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitches;
