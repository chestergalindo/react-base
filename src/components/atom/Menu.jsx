import React, { useContext } from 'react';
import '../../styles/components/atom/Menu.styl';
import InformationContext from '../../context/data';

export default function Menu() {
  const Information = useContext(InformationContext);

  return (
    <div className="Menu">
      <a href="/">{Information.title}</a>
    </div>
  );
}
