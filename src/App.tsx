import React, { FC, ReactElement } from 'react'
import './App.css';
import { Converter } from './components/Converter/Converter';

export const App: FC = (): ReactElement => (
  <div>
    <Converter />
  </div>
)
