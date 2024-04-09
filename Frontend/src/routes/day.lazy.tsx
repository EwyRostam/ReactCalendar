import { createLazyFileRoute } from '@tanstack/react-router'
import { month, today } from '../helpers/DateHelpers'

export const Route = createLazyFileRoute('/day')({
  component: Day,
})

function Day() {
  return (
    <section className="flex justify-center p-2">
      <h1 className="text-3xl">{today} of {month}</h1>
      <h2 className="text-2xl">How did you feel today?</h2>
    </section>
  )

}