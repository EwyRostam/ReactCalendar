import { useQuery } from "react-query"
import { getAllEmotions } from "../api/EmotionsAPI"
import Emotion from "./Emotion"

export default function RenderEmotions() {
    const { data: emotions, isLoading, isError } = useQuery('feelings', getAllEmotions)

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => 
            <Emotion key={feeling.content} content={feeling.content} value={feeling.value}/>)}
        </div>
    )

}
