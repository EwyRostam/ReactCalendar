import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getSpecificMonth } from '../api/monthsAPI/MonthsAPI';
import { monthAsNumber } from '../helpers/DateHelpers';
import { MonthReq, MonthRes } from '../api/monthsAPI/Types';
import { useQuery } from 'react-query';

export type DayData = {
  date: number;
  score: number;
}


export default function EmotionChart() {
  const monthIndex: number = monthAsNumber;
  const month: MonthReq = { monthIndex }

  const fetchedMonth = async () => {
    const result = await getSpecificMonth(month)
    const { daysInMonth } = result as MonthRes
    const { $values } = daysInMonth
    return $values
  }

  const daysArray = useQuery({
    queryKey: ['month'], 
    queryFn: fetchedMonth}).data

  let data;
  if(daysArray)
    {
      data = daysArray!.slice();
    }

  return (
    <section className="h-80 mt-40">
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
          <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={10} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );

}
