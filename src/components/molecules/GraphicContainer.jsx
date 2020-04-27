import React, { useContext } from 'react';
import DataWrite from '../atom/DataWrite';
import '../../styles/components/molecules/graphicContainer.styl';
import General from '../atom/GeneralGraphic';
import Piechart from '../atom/Piechart';
import InformationContext from '../../context/data';

export default function GraphicContainer() {
  const Information = useContext(InformationContext);

  return (
    <div className="graphic">
      <div className="graphicContainer">
        <h1>{Information.title}</h1>
        <div className="graphicInf">
          <div className="graphicInf-num">
            <DataWrite />
            <DataWrite />
            <DataWrite />
            <DataWrite />
            <DataWrite />
            <DataWrite />
            <DataWrite />
          </div>
          <div className="graphicInf-vis">
            <General />
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}
