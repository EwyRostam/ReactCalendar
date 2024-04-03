type Props = {
    date: number;
    color: Map<number, string>;
    selected: number;
    handleClick: (date: number) => void
}
export default function CalenderDate({ date, color, selected, handleClick}: Props) {
    const border = selected == date ? "border-orange-400" : "border-black";
    return (
        <button onClick={() => handleClick(date)}
            className={`w-1/7 border ${border} hover:border-white ${color.get(date)}`}>
            {date}
        </button>
    )
}