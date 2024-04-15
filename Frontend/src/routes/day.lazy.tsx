import { createLazyFileRoute } from '@tanstack/react-router'
import CompletedDay from '../components/CompletedDay'
import { DayReq } from '../api/daysAPI/Types';
import { useGetSpecificDay } from '../hooks/useGetSpecificDay';
import { getEmotionsList } from '../helpers/FilterDayHelpers';
import DayComponent from '../components/DayComponent';


type Props = {
  date: number;
  month: number;
}

export const Route = createLazyFileRoute('/day')({
  validateSearch: (day: Record<string, unknown>): Props => {
    return {
      date: day.date as number,
      month: day.month as number
    };
  },
  component: Day,
})



export default function Day() {

  const { date, month }: Props = Route.useSearch();

  const dayReq: DayReq = { date, month };

  const { data: result, isError, isLoading } = useGetSpecificDay(dayReq);

  const emotionsList = getEmotionsList(result);

  if (emotionsList.length > 0) {

    return (
      <>
        {isError && <p>Oooops, an error occured!</p>}
        {isLoading && <p>Loading...</p>}
        <CompletedDay emotionsList={emotionsList} dayReq={dayReq} result={result} />
      </>
    )
  }
  return (
    <DayComponent date={date} month={month} />
  )

}