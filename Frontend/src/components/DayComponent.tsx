import SearchBar from '../components/SearchBar'
import RenderEmotions from '../components/RenderEmotions'
import { useState } from 'react'
import { Feeling } from '../api/EmotionsAPI'
import { DayType, createDay } from '../api/DaysAPI'
import { useGetEmotions } from '../hooks/useEmotions'
import { Link } from '@tanstack/react-router'

type Props = {
    date: number;
    month: number;
}


export default function DayComponent({ date, month}: Props) {
    const allEmotions = useGetEmotions().data;
    const [selectedEmotions, setSelectedEmotions] = useState<Feeling[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    let filteredEmotions = allEmotions?.slice();

    if (allEmotions) {
        filteredEmotions = allEmotions!
            .filter(e => e.content.toLowerCase().includes(searchInput) && !selectedEmotions.includes(e))
    }

    const selected: Feeling[] = selectedEmotions.slice() ?? [];

    const onClickAll = (feeling: Feeling) => {
        selected.push(feeling);
        setSelectedEmotions(selected);
    }

    const onClickSelected = (feeling: Feeling) => {
        const removed = selected.filter(e => e != feeling);
        setSelectedEmotions(removed)
    }

    const hideDayView = () => {
        sessionStorage.setItem("dayView", "hide");
    }

    const emotions = selectedEmotions;

    const dayToCreate: DayType = { date, month, emotions };

    const heading = new Date().toLocaleDateString();

    return (

        <section className="flex justify-center bg-background">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <Link to="/" className="btn btn-square btn-sm" onClick={() => hideDayView()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </Link>
                    </div>

                    <section className="flex flex-col items-center p-2 gap-2">
                        <h1 className="text-3xl">{heading}</h1>
                        <h2 className="text-2xl">How did you feel today?</h2>
                        <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
                        <article className="border border-black rounded-md size-60">
                            <RenderEmotions handleClick={onClickSelected} emotions={selectedEmotions} />
                        </article>
                        <button onClick={() => createDay(dayToCreate)} className="btn btn-outline btn-success w-60">
                            Submit
                        </button>
                        <RenderEmotions handleClick={onClickAll} emotions={filteredEmotions ?? []} />
                    </section>

                </div>
            </div>
        </section>


    )
}