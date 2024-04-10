import { createLazyFileRoute } from '@tanstack/react-router'
import AddRelationship from '../components/AddRelationship'

export const Route = createLazyFileRoute('/relationship')({
  component: () => Relationship,
})



export default function Relationship() {

  return (
    <AddRelationship />
  )
}