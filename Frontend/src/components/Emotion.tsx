type Props = {
    content: string;
}


export default function Emotion({content} : Props) {
    return(
        <button className="border border-black rounded m-1 px-1 bg-green-400 hover:bg-green-500">{content}</button>
    )
}