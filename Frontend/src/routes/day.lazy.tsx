import { createLazyFileRoute } from '@tanstack/react-router'
import CompletedDay from '../components/CompletedDay'


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

  return (
    <>
      <CompletedDay date={date} month={month} />
    </>
  )

}