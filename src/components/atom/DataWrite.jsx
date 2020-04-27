import React from 'react';
import '../../styles/components/atom/DataWrite.styl';

export default function DataWrite({ data }) {
  return (
    <div className="dataWrite">
      <div className="dataWrite-title">
        <h3>{data.name}</h3>
      </div>
      <div className="dataWrite-inf">
        <div className="dataWrite-inf__consolidado">{data.valor}</div>
        <div className="dataWrite-inf__average">{data.percentage}</div>
      </div>
    </div>
  );
}
