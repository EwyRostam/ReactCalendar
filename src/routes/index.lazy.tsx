import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
      <AddEmotion/>
  )
}