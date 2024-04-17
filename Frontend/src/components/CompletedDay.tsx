import RenderEmotions from "./RenderEmotions";
import { DayReq, DayRes } from "../api/daysAPI/Types";
import { Feeling } from "../api/emotoinsAPI/Types";

type Props = {
    dayReq: DayReq;
    result: DayRes | undefined;
    emotionsList: Feeling[];
}



export default function CompletedDay({ dayReq, result, emotionsList }: Props) {


    return (
        <section className="flex flex-col items-center p-2 gap-2">
            {emotionsList.length > 0 && <><h1 className="text-3xl">Your feelings {dayReq.date}/{dayReq.month}</h1>
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