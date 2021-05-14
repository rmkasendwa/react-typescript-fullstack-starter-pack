import { createContext } from "react";

interface ISampleContext { }

const SampleContext = createContext<ISampleContext>({});

export const SampleProvider: React.FC = ({ children }) => {
  return (
    <SampleContext.Provider value={{}}>{children}</SampleContext.Provider>
  );
};
