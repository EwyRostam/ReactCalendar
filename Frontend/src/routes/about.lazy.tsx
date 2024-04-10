import { createLazyFileRoute } from '@tanstack/react-router'
import { Calendar } from '../components/Calendar'
import CompletedDay from '../components/CompletedDay'
import { monthAsNumber, today } from '../helpers/DateHelpers'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

export default function About() {

  return (
    <>
      <Calendar />
      <CompletedDay date={today} month={monthAsNumber + 1}/>
    </>
  )

}