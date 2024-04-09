import { useState } from "react";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    feeling: Feeling;
    setArr?: React.Dispatch<React.SetStateAction<Feeling[]>>;
    selectedArr?: Feeling[]
}


export default function Emotion({ feeling, setArr, selectedArr }: Props) {

    const color = feeling.value > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";
    const emotions: Feeling[] = selectedArr?.slice() ?? [];
    const [visibility, setVisibility] = useState<string>("");

    const handleClick = (feeling: Feeling) => {
        emotions.push(feeling);
        setArr!(emotions);
        setVisibility("invisible");
    }

    return (
        <button onClick={() => handleClick(feeling)} className={`border border-black rounded m-1 px-1 ${color} ${visibility}`}>{feeling.content}</button>
    )
}