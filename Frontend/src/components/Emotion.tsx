import { useState } from "react";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    feeling: Feeling;
    handleClick?: (
        feeling: Feeling,
        setVisibility: React.Dispatch<React.SetStateAction<string>>,
        visibility: string
    ) => void

}


export default function Emotion({ feeling, handleClick }: Props) {
    const [visibility, setVisibility] = useState<string>("");

    const color = feeling.value > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";
    const isVisible = visibility == "" ? "invisible" : ""


    return (
        <button onClick={() => handleClick!(feeling, setVisibility, isVisible)} className={`border border-black rounded m-1 px-1 ${color} ${visibility}`}>{feeling.content}</button>
    )
}