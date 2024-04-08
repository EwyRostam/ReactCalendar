import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'
import { getAllEmotions } from '../api/Api'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
const emotions = getAllEmotions();

  return (
    <>
      <AddEmotion/>
      <div>
      {emotions.Map(feeling => <p>{feeling}</p>)}
      </div>
    </>
  )
}