import React, { useContext } from 'react';
import '../../styles/components/atom/Profile.styl';

import InformationContext from '../../context/data';

export default function Profile() {
  const Information = useContext(InformationContext);
  return (
    <div className="Profile">
      <img src={Information.avatar} alt="" />
      <div className="Profile-info">
        <h3>Cesar Galindo</h3>
        <span> Web Developer</span>
      </div>
    </div>
  );
}
