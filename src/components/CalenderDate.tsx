type Props = {
    date: number;
    color: Map<number, string>;
    setState : React.Dispatch<React.SetStateAction<Map<number, string>>>;
}
export default function CalenderDate({date, color, setState}: Props){

    function handleClick(date: number) {
        let currentMap: Map<number, string> = color;

        color.get(date) == ""
            ? (currentMap.set(date, "bg-red-400"))
            : (currentMap.set(date, ""))

        setState(new Map(currentMap));
    }

    return(
    <button onClick={()=>handleClick(date)}  className={`w-1/7 border border-black hover:border-white ${color.get(date)}`}>{date}</button>
    )
}