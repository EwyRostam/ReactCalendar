import { useQuery } from "react-query";
import { DayReq, DayRes, getSpecificDay } from "../api/DaysAPI";
import RenderEmotions from "./RenderEmotions";

type Props = {
    date: number;
    month: number;
}



export default function CompletedDay({ date, month }: Props) {

    const dayReq: DayReq = { date, month };


    const fetchedDay = async () => {
        const result = await getSpecificDay(dayReq)
        const {emotions} = result as DayRes
        const {$values} = emotions
        return $values
    }

    const {data: print} = useQuery('day', fetchedDay);


    return (
        <section className="flex flex-col items-center p-2 gap-2">
            <h1 className="text-3xl">Your feelings {date}/{month}</h1>

            <article className="border border-black rounded-md size-60">
                <RenderEmotions emotions={print ?? []} />
            </article>

        </section>
    )
}