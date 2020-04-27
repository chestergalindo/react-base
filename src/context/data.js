import React from 'react';

export const Information = {
  data: {
    name: 'Diego Maury',
    profession: 'Master Coach',
    title: 'General Information',
    avatar:
      'https://pbs.twimg.com/profile_images/1232485118431899649/ow8vqMTj_400x400.jpg',
    religion: [
      {
        name: 'Christians',
        valor: '2.173 M',
        percentage: '31%',
      },
      {
        name: 'Muslims',
        valor: '1.598 M',
        percentage: '23%',
      },
      {
        name: 'No Religion',
        valor: '1.126 M',
        percentage: '16%',
      },
      {
        name: 'Hindus',
        valor: '1.033 M',
        percentage: '15%',
      },
      {
        name: 'Buddhists',
        valor: '487 M',
        percentage: '7%',
      },
      {
        name: 'Folk Religionists',
        valor: '405 M',
        percentage: '6%',
      },
      {
        name: 'Other Religions',
        valor: '58 M',
        percentage: '1%',
      },
      {
        name: 'Jews',
        valor: '13 M',
        percentage: '0.2%',
      },
    ],
  },
};

const InformationContext = React.createContext(Information.data);

export default InformationContext;
