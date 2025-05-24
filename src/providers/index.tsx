import { Provider as StoreProvider } from "react-redux";
import { store } from "../app/store";

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};
