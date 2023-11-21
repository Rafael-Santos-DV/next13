'use client';

import React, { createContext, useContext } from 'react';

const SidebarContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const SidebarContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
