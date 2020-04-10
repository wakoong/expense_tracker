import { ReactElement } from 'react';

type MONTH = {
  id: number;
  value: string;
  isSelected: boolean;
};

export type MONTHS = MONTH[];

type EMOJI = {
  symbol: string;
  label: string;
};

export type EMOJIS = EMOJI[];

export type HeaderProps = {
  title: string;
  link: string;
};

export type PanelProps = {
  children: ReactElement[];
  tabs: string[];
};
