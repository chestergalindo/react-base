import React from 'react';
import './styles/App.styl';
import GraphicContainer from './components/molecules/GraphicContainer';
import RightSide from './components/molecules/RightSide';

import InformationContext, { Information } from './context/data';

export default function App() {
  return (
    <InformationContext.Provider value={Information.data}>
      <div className="page">
        <RightSide />
        <GraphicContainer />
      </div>
    </InformationContext.Provider>
  );
}
