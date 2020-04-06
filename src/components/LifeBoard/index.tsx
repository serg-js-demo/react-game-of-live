import React from 'react';
import useLifeCells from './hooks/useLifeCells';
import { LifeBoardDiv, LifeBoardCell } from './styles';

type LifeBoardProps = {
    size: number;
    started: boolean;
}

const LifeBoard: React.FC<LifeBoardProps> = ({size, started}) => {
  const lifeCells = useLifeCells({ size, started });
  const items = lifeCells.map((el, idx) => <LifeBoardCell key={idx} value={el} />)
    return <LifeBoardDiv columns={size} rows={size}>
      {items}
    </LifeBoardDiv>;
}

export default LifeBoard;
