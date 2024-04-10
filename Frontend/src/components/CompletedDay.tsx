import { useQuery } from "react-query";
import { DayReq, getSpecificDay } from "../api/DaysAPI";
import RenderEmotions from "./RenderEmotions";

type Props = {
    date: number;
    month: number;
}


export default function CompletedDay ({date, month} :Props) {

    const dayReq :DayReq = {date, month};


        const fetchedDay =  getSpecificDay(dayReq);

        console.log(fetchedDay);
  

    const heading = new Date().toLocaleDateString();

    return (
      <section className="flex flex-col items-center p-2 gap-2">
        <h1 className="text-3xl">{heading}</h1>
        <h2 className="text-2xl">How did you feel today?</h2>
        
        <article className="border border-black rounded-md size-60">
          <RenderEmotions emotions={[]} />
        </article>
        
      </section>
    )
}