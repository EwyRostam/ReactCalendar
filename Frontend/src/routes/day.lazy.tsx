import { createLazyFileRoute } from '@tanstack/react-router'
import { month, today } from '../helpers/DateHelpers'
import SearchBar from '../components/SearchBar'
import RenderEmotions from '../components/RenderEmotions'
import { useGetEmotions } from '../hooks/useEmotions'
import { useState } from 'react'
import { Feeling } from '../api/EmotionsAPI'

export const Route = createLazyFileRoute('/day')({
  component: Day,
})

function Day() {

  const emotions = useGetEmotions().data;
  const [selectedEmotions, setSelectedEmotions] = useState<Feeling[]>([]);

  return (
    <section className="flex flex-col items-center p-2 gap-2">
      <h1 className="text-3xl">{today} of {month}</h1>
      <h2 className="text-2xl">How did you feel today?</h2>
      <article className="border border-black rounded-md size-60">
        <RenderEmotions emotions={selectedEmotions}/>
      </article>
      <SearchBar/>   
      <RenderEmotions selectedArr={selectedEmotions} setArr={setSelectedEmotions} emotions={emotions ?? []}/>
    </section>
  )

}