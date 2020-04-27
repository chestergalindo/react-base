import React, { useContext } from 'react';
import DataWrite from '../atom/DataWrite';
import '../../styles/components/molecules/graphicContainer.styl';
import General from '../atom/GeneralGraphic';
import Piechart from '../atom/Piechart';
import InformationContext from '../../context/data';

export default function GraphicContainer() {
  const Information = useContext(InformationContext);
  console.log(Information.religion);

  return (
    <div className="graphic">
      <div className="graphicContainer">
        <h1>{Information.title}</h1>
        <div className="graphicInf">
          <div className="graphicInf-num">
            {Information.religion.map(item => {
              return <DataWrite key={item.name} data={item} />;
            })}
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
