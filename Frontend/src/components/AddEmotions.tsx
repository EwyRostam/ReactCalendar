import { SyntheticEvent} from "react";
import { Feeling, createEmotion } from "../api/Api";

type CustomFormValues = {
    emotion: { value: string };
    positiveOrNegative: { value: number };
    oppositeEmotion: { value: string };
}

export default function AddEmotion() {

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { emotion, positiveOrNegative, oppositeEmotion } = e.target as typeof e.target & CustomFormValues;
        const content = emotion.value;
        const value = positiveOrNegative.value;
        const opposite = oppositeEmotion.value;
        const feeling : Feeling = {content, value, opposite}
        createEmotion(feeling);
        console.log("Feeling to post: ",feeling)
    }

    return (
        <section className="flex flex-col items-center justify-center size-full border border-black">

            <form onSubmit={handleSubmit} className="flex flex-col size-96 border border-black">
                <label htmlFor="content">Add a feeling</label>
                <input id="emotion" type="text" placeholder="Feeling" className="border border-black" />
                <label htmlFor="opposite">What is the opposite feeling?</label>
                <input id="oppositeEmotion" type="text" placeholder="Opposite feeling" className="border border-black" />
                <label htmlFor="">
                    <input id="positiveOrNegative" value={1} type="radio" />
                    Positive
                </label>
                <label htmlFor="">
                    <input value={-1} type="radio" />
                    Negative
                </label>
                <input id="positiveOrNegative" type="submit" className="border border-black" />
            </form>
        </section>
    )
}