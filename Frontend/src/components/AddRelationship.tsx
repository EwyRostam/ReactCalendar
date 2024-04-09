import { SyntheticEvent} from "react";
import { Relationship, createRelationship } from "../api/RelationshipsAPI";

type CustomFormValues = {
    relationshipName: { value: string };
    emotionsList: { value: string[] };
}

export default function AddRelationship() {

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { relationshipName, emotionsList } = e.target as typeof e.target & CustomFormValues;
        const name = relationshipName.value;
        const wantedEmotions = emotionsList.value;
        const relationship : Relationship = {name, wantedEmotions}
        createRelationship(relationship);
        console.log("Relationship to post: ",relationship)
    }

    return (
        <section className="flex flex-col items-center justify-center size-full border border-black">

            <form onSubmit={handleSubmit} className="flex flex-col size-96 border border-black">
                <label htmlFor="content">Add a Relationship</label>
                <input id="relationshipName" type="text" placeholder="Relationship" className="border border-black" />
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