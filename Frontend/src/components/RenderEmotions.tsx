import { useQuery } from "react-query"
import { getAllEmotions } from "../api/EmotionsAPI"

export default function RenderEmotions() {
    const { data: emotions, isLoading, isError } = useQuery('feelings', getAllEmotions)

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => <p key={feeling.content}>{feeling.content}</p>)}
        </div>
    )

}
