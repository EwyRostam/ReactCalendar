import { Relationship } from "../api/relationshipsAPI/Types";

type Props = {
    rel: Relationship;
    handleClick: (rel: Relationship) => void;
}
export default function Card({ rel, handleClick }: Props) {
    return (
        <div className="card h-40 w-96 bg-base-100 shadow-xl drop-shadow-md transition-transform hover:scale-105" onClick={() => handleClick(rel)}>
            <div className="card-body flex justify-center items-center">
                <h1 className="text-3xl">{rel.name}</h1>
            </div>
        </div>
    )
}