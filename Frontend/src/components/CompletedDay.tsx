import RenderEmotions from "./RenderEmotions";
import DayComponent from "./DayComponent";
import { useGetSpecificDay } from "../hooks/useGetSpecificDay";
import { DayReq } from "../api/daysAPI/Types";
import { getEmotionsList } from "../helpers/FilterDayHelpers";

type Props = {
    date: number;
    month: number;
}



export default function CompletedDay({ date, month }: Props) {

    const dayReq: DayReq = { date, month };

    const { data: result, isError, isLoading } = useGetSpecificDay(dayReq);

    const emotionsList = getEmotionsList(result);

    if (emotionsList.length > 0) {
        return (
            <section className="flex flex-col items-center p-2 gap-2">
                {isError && <p>Oooops, an error occured!</p>}
                {isLoading && <p>Loading...</p>}
                {emotionsList.length > 0 && <><h1 className="text-3xl">Your feelings {date}/{month}</h1>
                    <article className="border border-black rounded-md w-60 h-48">
                        <RenderEmotions emotions={emotionsList ?? []} />
                    </article>
                </>}
                {result!.content &&
                    <article className="border border-black rounded-md w-60 h-48 p-2">
                        {result!.content}
                    </article>}
            </section>
        )

    }

    return (
        <DayComponent date={date} month={month} />
    )
}