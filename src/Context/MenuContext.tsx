import React, { FC, createContext, useState } from "react";

type MenuContext = {
  open: boolean;
  setOpen(): void;
};

export const MenuContext = createContext<MenuContext>({
  open: false,
  setOpen: () => {
    throw new Error("setOpen() not implemented");
  },
});

export const MenuContextProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen: clickHandler,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
