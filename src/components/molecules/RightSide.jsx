import React from 'react';
import '../../styles/components/molecules/RightSide.styl';

import Icon from '../atom/Icon';
import Menu from '../atom/Menu';
import Profile from '../atom/Profile';

export default function RightSide() {
  return (
    <div className="RightSide">
      <Icon />
      <Menu />
      <Profile />
    </div>
  );
}
