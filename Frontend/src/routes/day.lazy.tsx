import { createLazyFileRoute } from '@tanstack/react-router'
import { monthAsNumber, today } from '../helpers/DateHelpers'
import DayComponent from '../components/DayComponent'

export const Route = createLazyFileRoute('/day')({
  component: Day,
})



export default function Day() {

return(
  <p>hej</p>
)

}