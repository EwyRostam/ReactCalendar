import { Feeling } from "../api/EmotionsAPI";

type Props = {
    feeling: Feeling;
}


export default function Emotion({feeling} : Props) {
    const color = feeling.value > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";

    return(
        <button  className={`border border-black rounded m-1 px-1 ${color}`}>{feeling.content}</button>
    )
}