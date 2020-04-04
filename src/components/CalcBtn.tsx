import React, { useState } from 'react';
type Props = {
  btn: string | number;
};
export default function CalcBtn({ btn }: Props) {
  const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;
    console.log(target.value);
  };
  return (
    <button value={btn} onClick={handleButton}>
      {btn}
    </button>
  );
}
