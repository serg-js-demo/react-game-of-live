import React, { useCallback, useState } from 'react';
import ToolbarContainer from './styles/ToolbarContainer';
import NumberInput from 'components/ui/NumberInput';
import Button from 'components/ui/Button';

type ToolbarProps = {
  setSize: Function;
  setStarted: Function;
  started: boolean;
  size: number;
  minSize: number;
  maxSize: number;
}

const Toolbar: React.FC<ToolbarProps> = ({setSize, setStarted, started, size, minSize, maxSize}) => {
  const [enabled, setEnabled] = useState(true);
  const toggleLife = useCallback(() => {
    setStarted(!started);
  }, [started, setStarted]);

  return <ToolbarContainer>
    <Button disabled={!enabled} started={started} onClick={toggleLife}>{started ? 'Stop' : 'Start'}</Button>
    <NumberInput setSize={setSize} started={started} setEnabled={setEnabled} size={size} minSize={minSize} maxSize={maxSize} />
  </ToolbarContainer>;
}

export default React.memo(Toolbar)
