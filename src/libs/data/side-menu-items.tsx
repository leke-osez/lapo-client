import AccountIcon from "../../assets/comps/account-icon";
import AuthorizationList from "../../assets/comps/authorization-list";
import AuthorizationQueueIcon from "../../assets/comps/authorization-queue";
import BranchesIcon from "../../assets/comps/branches-icon";
import CardProfileIcon from "../../assets/comps/card-profile-icon";
import CardRequestIcon from "../../assets/comps/card-request-icon";
import CardSchemeIcon from "../../assets/comps/card-scheme";
import CardsIcon from "../../assets/comps/cards-icon";
import RolesIcon from "../../assets/comps/roles";
import Stock from "../../assets/comps/stock";
import TrailIcon from "../../assets/comps/trail-icon";
import UsersIcon from "../../assets/comps/users";
import { routePaths } from "../../routes/route-paths";

type SideMenuItems = Array<{
  title: string;
  icon: React.ReactNode;
  path: string;
}>;

export const sideMenuItems: SideMenuItems = [
  {
    title: "branches",
    icon: <BranchesIcon />,
    path: routePaths.branches.index,
  },
  { title: "roles", icon: <RolesIcon />, path: routePaths.roles.index },
  { title: "users", icon: <UsersIcon />, path: routePaths.users.index },
  {
    title: "card scheme",
    icon: <CardSchemeIcon />,
    path: routePaths.cardScheme.index,
  },
  {
    title: "card profile",
    icon: <CardProfileIcon />,
    path: routePaths.cardProfile.index,
  },
  {
    title: "card request",
    icon: <CardRequestIcon />,
    path: routePaths.cardRequest.index,
  },
  { title: "stock", icon: <Stock />, path: routePaths.stock.index },
  { title: "cards", icon: <CardsIcon />, path: routePaths.cards.index },
  {
    title: "authorization list",
    icon: <AuthorizationList />,
    path: routePaths.authorizationList.index,
  },
  {
    title: "authorization queue",
    icon: <AuthorizationQueueIcon />,
    path: routePaths.authorizationQueue.index,
  },
  { title: "trail", icon: <TrailIcon />, path: routePaths.trail.index },
  { title: "accounts", icon: <AccountIcon />, path: routePaths.account.index },
  //   { title: "dashboard", icon: <Da />, path: routePaths.dashboard.index },
  //   { title: "login", icon: <BranchesIcon />, path: routePaths.auth.signin },
  //   { title: "settings", icon: <BranchesIcon />, path: routePaths.auth.signin },
];
