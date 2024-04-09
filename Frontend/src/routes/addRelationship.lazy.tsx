import { createLazyFileRoute } from '@tanstack/react-router'
import AddRelationship from '../components/AddRelationship'

export const Route = createLazyFileRoute('/addRelationship')({
  component: () => <div>Hello /addRelationship!</div>
})



export default function addRelationship() {

  return (
    <>
      <AddRelationship />
    </>
  )
}