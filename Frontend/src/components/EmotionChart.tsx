import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DayData = {
  name: number;
  MoodIndex: number;
}



const data = [
  {
    name: 'Page A',
    MoodIndex: 2400,
  },
  {
    name: 'Page B',
    MoodIndex: 1398,
  },
  {
    name: 'Page C',
    MoodIndex: 9800,
  },
  {
    name: 'Page D',
    MoodIndex: 3908,
  },
  {
    name: 'Page E',
    MoodIndex: 4800,
  },
  {
    name: 'Page F',
    MoodIndex: 3800,
  },
  {
    name: 'Page G',
    MoodIndex: 4300,
  },
];

export default class EmotionChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <section className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="MoodIndex" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>
    );
  }
}
