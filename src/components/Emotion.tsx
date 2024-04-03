type Emotion = {
    content: string;
    value: string;
    opposite: string;
    isWanted: Boolean;
}

export default function Emotion({content}: Emotion) {
    <button className="border border-black rounded m-1 px-1 bg-green-400 hover:bg-green-500">{content}</button>
}