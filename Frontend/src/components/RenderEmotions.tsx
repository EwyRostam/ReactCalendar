import Emotion from "./Emotion"
import { useGetEmotions } from "../hooks/useEmotions";
import { Feeling } from "../api/emotoinsAPI/Types";

type Props = {
    emotions: Feeling[];
    handleClick?: (
        feeling: Feeling
    ) => void
}


export default function RenderEmotions({ emotions, handleClick }: Props) {
    const { isLoading, isError } = useGetEmotions();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling =>
                <Emotion handleClick={handleClick} key={feeling.content} feeling={feeling} />)}
        </div>
    )

}
