import { SyntheticEvent, useRef } from "react";
import Emotion from "./Emotion";

type CustomFormValues = {
    content: { value: string };
    value: { value: string };
    opposite: { value: string };
    isWanted: { value: Boolean };
}



export default function AddEmotion() {

    const feeling = useRef<HTMLInputElement>

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { content, value, opposite, isWanted } = e.target as typeof e.target & CustomFormValues;
        console.log(content);
        console.log(value);
        console.log(opposite);
        console.log(isWanted);
        return <button className="border border-black rounded m-1 px-1 bg-green-400 hover:bg-green-500">{content.value}</button>

    }

    return (
        <section className="flex flex-col items-center justify-center size-full border border-black">

            <form onSubmit={handleSubmit} className="flex flex-col size-96 border border-black">
                <label htmlFor="content">Add a feeling</label>
                <input id="content" type="text" placeholder="Feeling" className="border border-black" />
                <label htmlFor="opposite">What is the opposite feeling?</label>
                <input id="opposite" type="text" placeholder="Opposite feeling" className="border border-black" />
                <label htmlFor="">
                    <input id="" type="radio" />
                    Positive
                </label>
                <label htmlFor="">
                    <input type="radio" />
                    Negative
                </label>
                <input type="submit" className="border border-black" />
            </form>
        </section>
    )
}