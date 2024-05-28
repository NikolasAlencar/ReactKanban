import { ReactNode, createContext, useState } from "react";
import { InitialData } from "../models/IInitialData";

interface Context {
  error: string | null;
  loading: boolean | null;
  dataBoard: InitialData | null;
  setDataBoard: (value: React.SetStateAction<InitialData | null>) => void;
  setLoading: (value: React.SetStateAction<boolean>) => void;
  setError: (value: React.SetStateAction<null>) => void;
}

export const UserContext = createContext({} as Context);

export const UserDataBoard = ({ children }: { children: ReactNode }) => {
  const [dataBoard, setDataBoard] = useState<InitialData | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{ dataBoard, error, loading, setDataBoard, setError, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
