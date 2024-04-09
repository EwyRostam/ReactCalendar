import Emotion from "./Emotion"
import { useGetEmotions } from "../hooks/useEmotions";
import { Feeling } from "../api/EmotionsAPI";

type Props = {
    emotions: Feeling[];
    setArr?: React.Dispatch<React.SetStateAction<Feeling[]>>;
    selectedArr?: Feeling[];
}


export default function RenderEmotions({emotions, setArr, selectedArr}: Props) {
    const {isLoading, isError } = useGetEmotions();

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>No feelings found!</p>}
            {emotions && emotions!.map(feeling => 
            <Emotion selectedArr={selectedArr} setArr={setArr} key={feeling.content} feeling={feeling}/>)}
        </div>
    )

}
