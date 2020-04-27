import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '1951',
    uv: 2584034261,
  },
  {
    name: '1960',
    uv: 3034949748,
  },
  {
    name: '1970',
    uv: 3700437046,
  },
  {
    name: '1980',
    uv: 4458003514,
  },
  {
    name: '1990',
    uv: 5327231061,
  },
  {
    name: '2000',
    uv: 6143493823,
  },
  {
    name: '2010',
    uv: 6956823603,
  },
  {
    name: '2020',
    uv: 7794798739,
  },
];

export default class GeneralGraphic extends PureComponent {
  render() {
    return (
      <AreaChart
        width={750}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 40,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="white" fill="green" />
      </AreaChart>
    );
  }
}
