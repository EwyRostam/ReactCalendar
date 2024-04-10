import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthReq, MonthRes, getSpecificMonth } from '../api/MonthsAPI';
import { monthAsNumber } from '../helpers/DateHelpers';
import { useQuery } from 'react-query';

export type DayData = {
  date: number;
  score: number;
}


export default function EmotionChart() {
  const monthIndex: number = monthAsNumber + 1;
  const month: MonthReq = { monthIndex }

  const fetchedMonth = async () => {
    const result = await getSpecificMonth(month)
    const { daysInMonth } = result as MonthRes
    const { $values } = daysInMonth
    return $values
  }

  const daysArray = useQuery('month', fetchedMonth).data

  let data;
  if(daysArray)
    {
      data = daysArray!.slice();
    }

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
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );

}
