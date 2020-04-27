import React, { useContext } from 'react';
import '../../styles/components/atom/Profile.styl';

import InformationContext from '../../context/data';

export default function Profile() {
  const Information = useContext(InformationContext);
  return (
    <div className="Profile">
      <img src={Information.avatar} alt="" />
      <div className="Profile-info">
        <h3>{Information.name}</h3>
        <span>{Information.profession}</span>
      </div>
    </div>
  );
}
