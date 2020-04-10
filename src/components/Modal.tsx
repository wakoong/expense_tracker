import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// 3rd-party imports
import styled from 'styled-components';

const Layout = styled.div`
  background-color: white;
  position: fixed;
  height: 400px;
  width: 400px;
  border: 1px solid black;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  z-index: 10;
`;

export default function Modal({ children }) {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }
  // useEffect vs. useLayoutEffect
  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot?.appendChild(elRef.current as HTMLDivElement);
    // clean-up function : runs when the function unmounts
    return () => {
      modalRoot?.removeChild(elRef.current as HTMLDivElement);
    };
  }, []);

  return createPortal(<Layout>{children}</Layout>, elRef.current);
}
