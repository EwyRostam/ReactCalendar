import Emotion from "./Emotion"
import { useGetEmotions } from "../hooks/useEmotions";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    emotions: Feeling[];
}


export default function RenderEmotions({emotions}: Props) {
    const {isLoading, isError } = useGetEmotions();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => 
            <Emotion key={feeling.content} feeling={feeling}/>)}
        </div>
    )

}
