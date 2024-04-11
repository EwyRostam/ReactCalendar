import { createLazyFileRoute } from '@tanstack/react-router'
import { monthAsNumber, today } from '../helpers/DateHelpers'
import CompletedDay from '../components/CompletedDay'

export const Route = createLazyFileRoute('/day')({
  component: Day,
})



export default function Day() {

return(
  <CompletedDay date={today} month={monthAsNumber}/>
)

}