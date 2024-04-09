import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'
import RenderEmotions from '../components/RenderEmotions'
import { useGetEmotions } from '../hooks/useEmotions';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {

  const emotions = useGetEmotions().data;

  return (
    <>
      <AddEmotion />
      <RenderEmotions emotions={emotions ?? []}/>
    </>
  )
}