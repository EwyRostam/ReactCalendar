import { SyntheticEvent } from "react";
import { Feeling, createEmotion } from "../api/EmotionsAPI";

type CustomFormValues = {
    emotion: { value: string };
    positiveOrNegative: { value: number };
    oppositeEmotion: { value: string };
}

type Props = {
    handleClick: () => void
}

export default function AddEmotion({handleClick}: Props) {

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { emotion, positiveOrNegative, oppositeEmotion } = e.target as typeof e.target & CustomFormValues;
        const content = emotion.value;
        const value = positiveOrNegative.value;
        const opposite = oppositeEmotion.value;
        const feeling: Feeling = { content, value, opposite }
        createEmotion(feeling);
        emotion.value = "";
        positiveOrNegative.value = 0;
        oppositeEmotion.value = "";
    }

    return (
        <>

                <section className="flex justify-center bg-background">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                    <button onClick={() => handleClick()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col items-center p-2 gap-2">
                                <label htmlFor="content" className="input input-bordered flex items-center gap-2">
                                    <input id="emotion" type="text" placeholder="Feeling" className="grow" />
                                </label>
                                <label htmlFor="opposite" className="input input-bordered flex items-center gap-2">
                                    <input id="oppositeEmotion" type="text" placeholder="Opposite feeling" className="grow" />
                                </label>
                                <div className="flex flex-col items-start w-56">
                                    <div className="flex items-center">
                                        <input name="positiveOrNegative" id="positiveOrNegative" value={1} type="radio" className="radio radio-success" />
                                        <label className="m-2">
                                            Positive
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input name="positiveOrNegative" id="positiveOrNegative" value={-1} type="radio" className="radio radio-error" />
                                        <label className="m-2">
                                            Negative
                                        </label>
                                    </div>
                                </div>

                                <input type="submit" className="btn btn-success btn-outline" />
                            </form>

                        </div>
                    </div>
                </section>

        </>
    )
}