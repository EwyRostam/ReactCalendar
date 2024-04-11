import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/addEmotions')({
  component: AddEmotionsPage
})

export default function AddEmotionsPage () {

}