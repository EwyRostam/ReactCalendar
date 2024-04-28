import { Navigate, createLazyFileRoute } from '@tanstack/react-router'
import { monthAsNumber, numberOfDays, today } from '../helpers/DateHelpers';
import { Calendar } from '../components/Calendar'
import { DayReq } from '../api/daysAPI/Types';
import { useGetSpecificDay } from '../hooks/useGetSpecificDay';
import { getEmotionsList } from '../helpers/FilterDayHelpers';
import { createMonth } from '../api/monthsAPI/MonthsAPI';
import { MonthReq } from '../api/monthsAPI/Types';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {

  const date = today;
  const month = monthAsNumber
  const dayReq: DayReq = { date, month };

  if (date == 1) {
    const monthReq: MonthReq = { monthIndex: month, numberOfDays };
    createMonth(monthReq);
  }

  const { data: day } = useGetSpecificDay(dayReq);
  const emotionsList = getEmotionsList(day);
  console.log(emotionsList);

  const dayView = sessionStorage.getItem("dayView");
  console.log(dayView);

  if (emotionsList.length < 1 && dayView == null) {
    return (
      <Navigate to="/day" search={{ date: date, month: month }} />
    )
  }

  return (
    <div className="bg-background h-screen">
      <Calendar />
    </div>
  )
}