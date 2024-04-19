import { Link } from "@tanstack/react-router";
import { monthAsNumber, today } from "../helpers/DateHelpers";

type Props = {
    date: number;
    color: Map<number, string>;
}
export default function CalenderDate({ date, color}: Props) {
    const border = today == date ? "border border-black hover:border-white" : "";

    return (
        <>
            <Link to="/day"
            search={{date: date, month: monthAsNumber}}
             className={`${border} flex justify-center items-center hover:shadow-md ${color.get(date)} rounded-sm mx-px`}>
                {date}
            </Link>
        </>
    )
}