import { useState } from "react";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    feeling: Feeling;
}

export const [selectedEmotions, setSelectedEmotions] = useState<Feeling[]>([]);

export default function Emotion({feeling} : Props) {
    const color = feeling.value > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";
    const emotions: Feeling[] = [];

    const handleClick = (feeling: Feeling) => {
        emotions.push(feeling);
        setSelectedEmotions(emotions);
    }

    return(
        <button onClick={() => handleClick(feeling)} className={`border border-black rounded m-1 px-1 ${color}`}>{feeling.content}</button>
    )
}