import React, { JSX, useEffect, useState } from 'react';

interface IManaCalculatorCustomInput {
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  min?: number;
  max?: number;
}

export function ManaCalculatorInput({
  value,
  onChange,
  className,
  min,
  max,
}: IManaCalculatorCustomInput): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [inputValue, setInputValue] = useState<string | number>(value);

  useEffect(() => {
    try {
      verifyMinAndMax(value);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, [min, max]);

  function verifyMinAndMax(value: string | number) {
    let message = '';

    if (!isNaN(min) && Number(value) < min) {
      message = 'Minimum value is ' + min;
    }
    if (!isNaN(min) && Number(value) > max) {
      message = 'Maximum value is ' + max;
    }

    if (
      !isNaN(min) &&
      !isNaN(max) &&
      (Number(value) < min || Number(value) > max)
    ) {
      message = 'Min: ' + min + ', Max: ' + max;
    }
    if (message) {
      throw new Error(message);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      setInputValue(e.target.value);
      verifyMinAndMax(e.target.value);
      setErrorMessage('');
      onChange(e.target.value);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div
      className={`mana_calculator__custom_wrapper ${
        errorMessage ? 'errored' : ''
      }`}
    >
      <input
        className={className}
        min={min}
        max={max}
        value={inputValue}
        onChange={handleInputChange}
      />
      {errorMessage && <p className='mana_calculator__error'>{errorMessage}</p>}
    </div>
  );
}
