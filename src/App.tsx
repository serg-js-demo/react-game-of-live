import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import LifeBoard from './components/LifeBoard';
import AppContainer from './components/AppContainer';

const DEFAULT_SIZE = 25;
const MAX_CELLS = 30;
const MIN_CELLS = 4;

const App = () => {
  const [started, setStarted] = useState(false);
  const [size, setSize] = useState(DEFAULT_SIZE);
  return (
    <AppContainer>
      <Toolbar setSize={setSize} setStarted={setStarted} size={size} started={started} minSize={MIN_CELLS} maxSize={MAX_CELLS} />
      <LifeBoard size={size} started={started} />
    </AppContainer>
  );
}

export default App;
