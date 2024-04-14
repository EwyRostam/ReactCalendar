import { useQuery } from "react-query";
import { DayReq, DayRes, getSpecificDay } from "../api/DaysAPI";
import RenderEmotions from "./RenderEmotions";
import DayComponent from "./DayComponent";

type Props = {
    date: number;
    month: number;
}



export default function CompletedDay({ date, month }: Props) {

    const dayReq: DayReq = { date, month };


    const fetchedDay = async () => {
        const result = await getSpecificDay(dayReq)
        const { emotions } = result as DayRes
        const { $values } = emotions
        return $values
    }

    const { data: emotions, isError, isLoading } = useQuery(['day', window.location.href], fetchedDay);
    if (emotions && emotions.length > 0 ) {
        return (
            <section className="flex flex-col items-center p-2 gap-2">
                {isLoading && <p>Loading...</p>}
                {emotions && <><h1 className="text-3xl">Your feelings {date}/{month}</h1>
                    <article className="border border-black rounded-md w-60 h-48">
                        <RenderEmotions emotions={emotions ?? []} />
                    </article>
                    <article className="border border-black rounded-md w-60 h-48">

                    </article>
                    </>}
            </section>
        )

    }

    return (
        <DayComponent date={date} month={month}/>
    )
}