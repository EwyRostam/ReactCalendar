import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotions from '../components/AddEmotions'

export const Route = createLazyFileRoute('/addEmotions')({
  component: AddEmotionsPage
})

export default function AddEmotionsPage () {
return (
  <AddEmotions/>
)
}