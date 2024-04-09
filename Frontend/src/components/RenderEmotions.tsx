import Emotion from "./Emotion"
import { useGetEmotions } from "../hooks/useEmotions";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    emotions: Feeling[];
    setArr?: React.Dispatch<React.SetStateAction<Feeling[]>>;
}


export default function RenderEmotions({emotions, setArr}: Props) {
    const {isLoading, isError } = useGetEmotions();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => 
            <Emotion setArr={setArr} key={feeling.content} feeling={feeling}/>)}
        </div>
    )

}
