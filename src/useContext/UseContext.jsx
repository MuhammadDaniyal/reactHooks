import { createContext } from "react";

const AppContext = createContext();

// {children} means puri app AppProvider ky under ati hy global state hy ab appProvider, ap jo use krna isma sy krlo use
const AppProvider = ({ children }) => {
  const userData = {
    name: "vinod",
    age: 28,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider }