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
        return result
    }

    const { data: result, isError, isLoading } = useQuery(['day', window.location.href], fetchedDay);

   

    if (result) {
        const { emotions } = result as DayRes;
        const { $values } = emotions;
        return (
            <section className="flex flex-col items-center p-2 gap-2">
                {isLoading && <p>Loading...</p>}
                {$values.length > 0 && <><h1 className="text-3xl">Your feelings {date}/{month}</h1>
                    <article className="border border-black rounded-md w-60 h-48">
                        <RenderEmotions emotions={$values ?? []} />
                    </article>
                </>}
                {result.content &&
                    <article className="border border-black rounded-md w-60 h-48 p-2">
                        {result.content}
                    </article>}
            </section>
        )

    }

    return (
        <DayComponent date={date} month={month} />
    )
}