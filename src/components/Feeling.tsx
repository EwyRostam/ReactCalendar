type Props = {
    handleClick: (color: string) => void
}

export default function Feeling ({handleClick} : Props) {
    return(
        <div className="flex justify-center">
        <button onClick={() => handleClick("bg-green-400")} className="border border-black rounded m-1 px-1 bg-green-400 hover:bg-green-500">Happy</button>
        <button onClick={() => handleClick("bg-red-400")} className="border border-black rounded m-1 px-1 bg-red-400 hover:bg-red-500">Sad</button>
        </div>
    )
}