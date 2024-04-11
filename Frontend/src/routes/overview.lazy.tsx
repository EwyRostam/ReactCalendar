import { createLazyFileRoute } from '@tanstack/react-router'
import EmotionChart from '../components/EmotionChart'
import AddRelationship from '../components/AddRelationship'

export const Route = createLazyFileRoute('/overview')({
  component: Overview
})

export default function Overview () {

  return(
    <>
    <EmotionChart/>
    </>

  )
}