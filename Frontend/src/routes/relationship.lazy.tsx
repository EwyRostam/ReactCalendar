import { createLazyFileRoute } from '@tanstack/react-router'
import AddRelationship from '../components/AddRelationship'

export const Route = createLazyFileRoute('/addRelationship')({
  component: () => Relationship
})



export default function Relationship() {

  return (

    <AddRelationship />

  )
}