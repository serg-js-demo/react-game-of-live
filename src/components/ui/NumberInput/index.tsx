import React, { useCallback, useState, useEffect } from 'react';
import Input from 'components/ui/Input';
import ErrorComponent from 'components/ui/ErrorComponent';
import InputContainer from './styles/InputContainer';

type NumberInputProps = {
  setSize: any;
  setEnabled: any;
  started: boolean;
  size: number;
  minSize: number;
  maxSize: number;
}

const NumberInput = ({setSize, setEnabled, started, size, minSize, maxSize}: NumberInputProps) => {
  const [error, setError] = useState<string | null>(null);
  const [sizeValue, setSizeValue] = useState<any>(size);

  useEffect(() => setEnabled(error === null), [error, setEnabled]);

  const onChange = useCallback((e: any) => {
    const value = +e.target.value;

    setSizeValue(e.target.value);

    if (value > maxSize) {
      setError(`Maximum amount: ${maxSize}`);
    } else if (value < minSize) {
      setError(`Minimum amount: ${minSize}`);
    } else {
      setError(null);
      setSize(value);
    }
  }, [setSize, setError, minSize, maxSize])
  return <InputContainer>
    <Input disabled={started} isError={!!error} type="number" onChange={onChange} value={sizeValue} />
    {error && <ErrorComponent>{error}</ErrorComponent>}
  </InputContainer>
}

export default React.memo(NumberInput);
