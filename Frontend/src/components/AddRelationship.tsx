import { SyntheticEvent, useState } from "react";
import { Relationship, createRelationship } from "../api/RelationshipsAPI";
import EmotionPicker from "./EmotionPicker";
import { Feeling } from "../api/emotoinsAPI/EmotionsAPI";

type CustomFormValues = {
    relationshipName: { value: string };
    categoryName: { value: string };
}

export default function AddRelationship() {
    const [emotionsList, setEmotionsList] = useState<Feeling[]>([]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { relationshipName, categoryName} = e.target as typeof e.target & CustomFormValues;
        const name = relationshipName.value;
        const wantedEmotions = emotionsList;
        const category = categoryName.value;
        const relationship: Relationship = { name, category, wantedEmotions }
        createRelationship(relationship);
        console.log("Relationship to post: ", relationship)
    }

    return (
        <section className="flex flex-col items-center justify-center size-full border border-black">
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name of relationship" className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input id="relationshipName" type="text" className="grow" placeholder="Name" />
                </label>
                <select id="categoryName" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Category</option>
                    <option>Work</option>
                    <option>Hobby</option>
                    <option>Love</option>
                    <option>Friendship</option>
                    <option>Family</option>
                </select>
                <EmotionPicker emotions={emotionsList} setEmotions={setEmotionsList}/>
            </form>
        </section>
    )
}