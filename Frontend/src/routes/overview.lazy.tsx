import { createLazyFileRoute } from '@tanstack/react-router'
import EmotionChart from '../components/EmotionChart'

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