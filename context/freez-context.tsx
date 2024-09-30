import React, { createContext, useContext, useState, ReactNode } from "react";

interface FrozenContextProps {
  isWaiting: boolean;
  setIsWaiting: (value: boolean) => void;
}

const FrozenContext = createContext<FrozenContextProps | undefined>(undefined);

export const FrozenProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isWaiting, setWaiting] = useState(false);

  const setIsWaiting = (value: boolean) => {
    setWaiting(value);
  };

  return (
    <FrozenContext.Provider value={{ isWaiting, setIsWaiting }}>
      {children}
    </FrozenContext.Provider>
  );
};

export const useFrozen = (): FrozenContextProps => {
  const context = useContext(FrozenContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a FrozenProvider");
  }
  return context;
};
