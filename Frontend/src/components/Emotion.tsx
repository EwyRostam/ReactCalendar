import { Feeling } from "../api/emotoinsAPI/Types";

type Props = {
    feeling: Feeling;
    handleClick?: (
        feeling: Feeling
    ) => void

}

export default function Emotion({ feeling, handleClick }: Props) {
    const color = feeling.value > 0 ? "bg-positive-400 hover:bg-positive-500" : "bg-negative-400 hover:bg-negative-500";

    return (
        <button onClick={() => handleClick!(feeling)} className={`border border-black rounded m-1 px-1 ${color}`}>{feeling.content}</button>
    )
}