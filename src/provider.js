import { createContext, useState } from "react";

const defaultState = {};

export const Context = createContext(defaultState);

export default function Provider({ children }) {
  const [state, setState] = useState(defaultState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
