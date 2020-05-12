import { useState, useEffect } from 'react';

export function useLocalStorage(
  name: string,
  value: { label: string; expense: string }
) {
  const [storage, setStorage] = useState([]);

  let fixedCostStorage;
  if (window.localStorage.getItem(name) !== null) {
    fixedCostStorage = window.localStorage.getItem(name);
    fixedCostStorage = JSON.parse(fixedCostStorage);
  } else {
    fixedCostStorage = [];
  }

  const getStorage = () => {
    setStorage(fixedCostStorage);
  };

  const addStorage = () => {
    fixedCostStorage[value.label] = value.expense;
    window.localStorage.setItem('fixedCost', JSON.stringify(storage));
    setStorage(fixedCostStorage);
  };

  return [storage, getStorage, addStorage];
}
