import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/addRelationship')({
  component: () => <div>Hello /addRelationship!</div>
})



export default function addRelationship() {

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