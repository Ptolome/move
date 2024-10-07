import React, { useContext } from 'react';
import { ClickCounterContext } from './click-counter';

function ClickCounterDisplay() {
  const { clickCount } = useContext(ClickCounterContext);

  return (
    <div>
     Ваша активность(колличество нажатий на кнопки): {clickCount}
    </div>
  );
}

export default ClickCounterDisplay;