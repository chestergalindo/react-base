import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: '🧜‍♀️ Oceania',
    uv: 42677813,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: '👨🏼‍⚖️ North America',
    uv: 368869647,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '💃🏻 Latin America',
    uv: 653962331,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '💶 Europe',
    uv: 747636026,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '🌍 Africa',
    uv: 1340598147,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '🍣 Asia',
    uv: 4641054775,
    pv: 2400,
    fill: '#8884d8',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  render() {
    return (
      <RadialBarChart
        width={700}
        height={300}
        cx={150}
        cy={150}
        innerRadius={50}
        outerRadius={140}
        barSize={100}
        data={data}
      >
        <RadialBar
          minAngle={50}
          label={{ position: 'insideStart', fill: '#000' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={20}
          width={200}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    );
  }
}
