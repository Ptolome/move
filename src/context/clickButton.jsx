import React, { useContext } from 'react';
import { ClickCounterContext } from './click-counter';

function ClickButton() {
  const { handleSimbolPres } = useContext(ClickCounterContext);

  return (
    <button onClick={handleSimbolPres}>
      Нажми меня!
    </button>
  );
}

export default ClickButton;