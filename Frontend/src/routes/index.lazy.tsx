import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'
import RenderEmotions from '../components/RenderEmotions'

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {

  return (
    <>
      <AddEmotion />
      <RenderEmotions/>
    </>
  )
}