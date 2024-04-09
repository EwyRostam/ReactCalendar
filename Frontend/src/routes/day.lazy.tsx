import { createLazyFileRoute } from '@tanstack/react-router'
import { month, today } from '../helpers/DateHelpers'
import SearchBar from '../components/SearchBar'
import RenderEmotions from '../components/RenderEmotions'
import { useGetEmotions } from '../hooks/useEmotions'
import { useState } from 'react'
import { Feeling } from '../api/EmotionsAPI'
import { DayType, createDay } from '../api/DaysAPI'

export const Route = createLazyFileRoute('/day')({
  component: Day,
})



function Day() {

  const allEmotions = useGetEmotions().data;
  const [selectedEmotions, setSelectedEmotions] = useState<Feeling[]>([]);
  const selected: Feeling[] = selectedEmotions.slice() ?? [];



  const onClickAll = (feeling: Feeling, setVisibility: React.Dispatch<React.SetStateAction<string>>, visibility: string) => {
    selected.push(feeling);
    setSelectedEmotions(selected);
    setVisibility(visibility);
  }

  const onClickSelected = (feeling: Feeling, setVisibility: React.Dispatch<React.SetStateAction<string>>, visibility: string) => {
    setSelectedEmotions(selected)
    setVisibility(visibility)
    selected.slice(selected.indexOf(feeling))
  }

  const date = today;
  const emotions = selectedEmotions;

  const dayToCreate : DayType = {date, emotions};


  return (
    <section className="flex flex-col items-center p-2 gap-2">
      <h1 className="text-3xl">{today} of {month}</h1>
      <h2 className="text-2xl">How did you feel today?</h2>
      <SearchBar />
      <article className="border border-black rounded-md size-60">
        <RenderEmotions handleClick={onClickSelected} emotions={selectedEmotions} />
      </article>
      <button onClick={() => createDay(dayToCreate)} className="btn btn-outline btn-success w-60">
        Submit
      </button>
      <RenderEmotions handleClick={onClickAll} emotions={allEmotions ?? []} />
    </section>
  )

}