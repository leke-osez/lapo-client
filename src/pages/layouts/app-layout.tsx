import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { infraLogo, lapoLogo } from "../../assets/png";
import { sideMenuItems } from "../../libs/data/side-menu-items";
import { Button } from "../../ui/components/button";
import DashboardIcon from "../../assets/comps/dashboard-icon";
import LogoutIcon from "../../assets/comps/logout-icon";
import { useMemo } from "react";
import { Input } from "../../ui/components/input";
import SearchIcon from "../../assets/comps/search-icon";
import NotificationIcon from "../../assets/comps/notification-icon";
import NavAvatarIcon from "../../assets/comps/nav-avatar-icon";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useLogout } from "@/services/auth/logout";
import { useDisclosure } from "@/hooks/use-disclosure";
import { Modal } from "@/ui/components/modal";
import CloseIcon from "@/assets/comps/close-icon";

const AppLayout = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/").pop() ?? "";
  const navigate = useNavigate();

  const { logout } = useLogout();

  const {
    open: openLogoutModal,
    close: closeLogoutModal,
    isOpen: isLogoutModalOpen,
  } = useDisclosure();

  return (
    <div className="fixed inset-0 flex h-screen w-screen overflow-hidden ">
      <nav className="min-w-fit max-w-[230px] w-full h-full border-r border-widget-border ">
        <SideNavMenu
          pathname={pathname}
          navigate={navigate}
          triggerLogout={openLogoutModal}
        />
      </nav>
      <main className="flex-1 flex flex-col">
        <TopNavMenu pathname={pathname} fullPath={location.pathname} />

        <div className="bg-background flex-1 px-5 py-2 overflow-auto">
          {<Outlet />}
        </div>
      </main>

      {isLogoutModalOpen && (
        <Modal close={closeLogoutModal} isOpen={isLogoutModalOpen}>
          <div className="w-full flex flex-col gap-6 max-w-[500px] min-w-[200px] p-3 ">
            <header className="w-full flex justify-end">
              <Button
                onClick={closeLogoutModal}
                className="p-0"
                variant={"plain"}
              >
                <CloseIcon />
              </Button>
            </header>
            <p className="text-2xl font-medium">
              Are you sure you want to sign out
            </p>
            <div className="flex w-full justify-end gap-3">
              <Button
                onClick={closeLogoutModal}
                className="font-semibold"
                variant={"bordered"}
              >
                Cancel
              </Button>
              <Button onClick={logout} className="bg-pry-text">
                Logout
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

type SideNavMenuProps = {
  pathname: string;
  navigate: (path: string) => void;
  triggerLogout: () => void;
};

const SideNavMenu = ({
  pathname,
  navigate,
  triggerLogout,
}: SideNavMenuProps) => {
  const isActive = (path: string) => {
    return pathname === path.split("/").pop();
  };
  const goTo = (path: string) => () => {
    navigate(path);
  };

  return (
    <section className="w-full bg-foreground p-[11px] flex flex-col justify-between gap-2 h-full">
      <img src={lapoLogo} width={138.5} height={30} />

      <Button
        className="w-full flex items-center gap-2 justify-start mt-4 py-1"
        variant={`${isActive("dashboard") ? "active-nav" : "inactive-nav"}`}
        onClick={goTo("/dashboard")}
      >
        <DashboardIcon />
        <p>Dashboard</p>
      </Button>

      <div className="flex flex-col gap-2 mt-6 min-h-[300px] h-[80%] ">
        <p className="text-xs text-[#00000080] opacity-65 mb-2 ml-4 ">
          MAIN MENU
        </p>

        <div className="flex flex-col  justify-between overflow-y-auto">
          {sideMenuItems.map((item) => {
            return (
              <Button
                key={item.title}
                variant={`${
                  isActive(`${item.path}`) ? "active-nav" : "inactive-nav"
                }`}
                onClick={goTo(item.path)}
                className="flex gap-2 items-center justify-start cursor-pointer "
              >
                <div className="flex items-start gap-2 justify-start">
                  {item.icon}
                  <p className="capitalize text-xs">{item.title}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <Button
          variant={"plain"}
          className="flex gap-2 items-center justify-start"
          onClick={triggerLogout}
        >
          <LogoutIcon />
          <p className="text-sm">Logout</p>
        </Button>

        <div className="flex flex-col gap-2 pl-5">
          <p className="text-xs text-input-icon">POWERED BY</p>
          <img src={infraLogo} width={100} height={20} />
        </div>
      </div>
    </section>
  );
};

type TopNavMenuProps = {
  pathname: string;
  fullPath: string;
};

const TopNavMenu = ({ pathname, fullPath }: TopNavMenuProps) => {
  const navigate = useNavigate();
  const PageMark = useMemo(() => {
    return sideMenuItems.find(
      (item) => item.path.split("/").pop() === pathname
    );
  }, [pathname]);
  const pathList = fullPath.split("/").slice(1);

  return (
    <div className="w-full bg-foreground flex justify-between items-center p-2 px-[19px] border-b border-widget-border">
      {PageMark && pathList.length === 1 && (
        <div className="flex items-center gap-2 text-sm">
          {PageMark.icon}
          <p className="capitalize font-medium">{PageMark.title}</p>
        </div>
      )}

      {pathList.length > 1 && (
        <div>
          <Button variant={"plain"} onClick={() => navigate(pathList[0])}>
            <CaretLeftIcon />
            <p>Back</p>
            {PageMark?.icon}
          </Button>

          <CaretRightIcon className="text-[#D0D5DD]" />
        </div>
      )}

      {pathname === "dashboard" && (
        <div className="flex items-center gap-2 text-sm">
          <DashboardIcon />
          <p className="capitalize font-medium">Dashboard</p>
        </div>
      )}

      <div className="flex items-center gap-4 ">
        {pathList.length === 1 && (
          <Input
            leftIcon={<SearchIcon />}
            placeholder="Search"
            className="rounded-full w-[214px]"
          />
        )}
        <Button variant={"plain"} className="p-0">
          <NotificationIcon />
        </Button>
        <Button variant={"plain"} className="rounded-full p-0">
          <NavAvatarIcon />
        </Button>
      </div>
    </div>
  );
};

export default AppLayout;
