import { useQuery } from "react-query";
import { DayReq, DayRes, getSpecificDay } from "../api/DaysAPI";
import RenderEmotions from "./RenderEmotions";
import { Feeling } from "../api/EmotionsAPI";

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

    const heading = new Date().toLocaleDateString();

    return (
        <section className="flex flex-col items-center p-2 gap-2">
            <h1 className="text-3xl">{heading}</h1>
            <h2 className="text-2xl">How did you feel today?</h2>

            <article className="border border-black rounded-md size-60">
                <RenderEmotions emotions={print ?? []} />
            </article>

        </section>
    )
}