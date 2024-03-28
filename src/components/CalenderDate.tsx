type Props = {
    date: number;
    color: Map<number, string>;
    handleClick : (date: number) => void
}
export default function CalenderDate({date, color, handleClick}: Props){

    return(
    <button onClick={() => handleClick(date)}  className={`w-1/7 border border-black hover:border-white ${color.get(date)}`}>{date}</button>
    )
}