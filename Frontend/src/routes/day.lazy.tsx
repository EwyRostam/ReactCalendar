import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/day') ({
  component: Day, 
})

function Day() {
  return (
    <>
  <div className="p-2">Hello from About!</div>
  </>
  )

}