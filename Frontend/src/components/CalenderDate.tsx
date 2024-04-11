
type Props = {
    date: number;
    color: Map<number, string>;
    selected: number;
    handleClick: (date: number) => void
}
export default function CalenderDate({ date, color, selected, handleClick}: Props) {
    const border = selected == date ? "border border-orange-400" : "";
    return (
        <>
        <button className={`${border} hover:shadow-md ${color.get(date)} rounded-sm mx-px`} onClick={() => handleClick(date)}>
            {date}
        </button>
         </>
    )
}