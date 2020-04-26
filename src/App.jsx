import React from 'react';
import './styles/App.styl';
import RightSide from './components/molecules/RightSide';

import InformationContext, { Information } from './context/data';

export default function App() {
  return (
    <InformationContext.Provider value={Information.data}>
      <RightSide />
      {/* <h1>HELLO REACT #2C305B OSCURO #222446!</h1> */}
    </InformationContext.Provider>
  );
}
