import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'
import { getAllEmotions } from '../api/EmotionsAPI'
import {useQuery } from 'react-query'

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  const { data: emotions, isLoading, isError } = useQuery('feelings', getAllEmotions)

  console.log("Emotions array", emotions)

  return (
    <>
      <AddEmotion />
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>No feelings found!</p>}
        {emotions && emotions!.map(feeling => <p key={feeling.content}>{feeling.content}</p>)}
      </div>
    </>
  )
}