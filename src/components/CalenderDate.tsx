type Props = {
    date: number;
    color: string;
    onDateClick: (date: number) => void;
}
export default function CalenderDate({date, color, onDateClick}: Props){
    return(
    <button onClick={() => onDateClick(date)} className={`w-1/7 border border-black hover:border-white ${color}`}>{date}</button>
    )
}