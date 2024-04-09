type Props = {
    content: string;
    value: number;
}


export default function Emotion({content, value} : Props) {
    const color = value > 0 ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500";

    return(
        <button className={`border border-black rounded m-1 px-1 ${color}`}>{content}</button>
    )
}