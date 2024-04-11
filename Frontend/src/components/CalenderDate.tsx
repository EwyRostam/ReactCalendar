import { Link } from "@tanstack/react-router";
import { monthAsNumber } from "../helpers/DateHelpers";

type Props = {
    date: number;
    color: Map<number, string>;
    selected: number;
    handleClick: (date: number) => void
}
export default function CalenderDate({ date, color, selected, handleClick }: Props) {
    const border = selected == date ? "border border-orange-400" : "";
    return (
        <>
            <Link to="/day"
            search={{date: date, month: monthAsNumber}}
             className={`${border} flex justify-center items-center hover:shadow-md ${color.get(date)} rounded-sm mx-px`} onClick={() => handleClick(date)}>
                {date}
            </Link>
        </>
    )
}