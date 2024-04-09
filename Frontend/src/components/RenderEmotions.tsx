import Emotion from "./Emotion"
import { useGetEmotions } from "../hooks/useEmotions";



export default function RenderEmotions() {
    const { data: emotions, isLoading, isError } = useGetEmotions();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => 
            <Emotion key={feeling.content} feeling={feeling}/>)}
        </div>
    )

}
