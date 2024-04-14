import { useState } from "react";
import RenderEmotions from "./RenderEmotions";
import SearchBar from "./SearchBar";
import { Feeling } from "../api/emotoinsAPI/EmotionsAPI";
import { useGetEmotions } from "../hooks/useEmotions";

type Props = {
    emotions: Feeling[];
    setEmotions: React.Dispatch<React.SetStateAction<Feeling[]>>;
}

export default function EmotionPicker({ setEmotions, emotions }: Props) {
    const allEmotions = useGetEmotions().data;
    const [searchInput, setSearchInput] = useState<string>("");
    let filteredEmotions;

    if (allEmotions) {
        filteredEmotions = allEmotions!
            .filter(e => e.content.toLowerCase().includes(searchInput) && !emotions.includes(e))
    }

    let selected: Feeling[] = [];
    if (emotions) {
        selected = emotions.slice();
    }

    const onClickAll = (feeling: Feeling) => {
        if (selected.length < 5) {
            selected.push(feeling);
            setEmotions(selected);
        }
    }

    const onClickSelected = (feeling: Feeling) => {
        const removed = selected.filter(e => e != feeling);
        setEmotions(removed)
    }


    return (
        <section>
            <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
            <article className="border border-black rounded-md size-60">
                <RenderEmotions handleClick={onClickSelected} emotions={emotions} />
            </article>
            <button type="submit" className="btn btn-outline btn-success w-60">
                Submit
            </button>
            <RenderEmotions handleClick={onClickAll} emotions={filteredEmotions ?? []} />
        </section>
    )
}