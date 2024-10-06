import { createContext, useState } from 'react';

const ClickCounterContext = createContext();

const ClickCounterProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleSimbolPres = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <ClickCounterContext.Provider value={{ clickCount, handleSimbolPres }}>
      {children}
    </ClickCounterContext.Provider>
  );
};
export { ClickCounterProvider, ClickCounterContext };