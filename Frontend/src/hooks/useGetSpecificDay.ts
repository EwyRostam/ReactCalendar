import { useQuery } from "react-query";
import { getSpecificDay } from "../api/daysAPI/DaysAPI";
import { DayReq } from "../api/daysAPI/Types";

const fetchedDay = async (dayReq : DayReq) => {
    const result = await getSpecificDay(dayReq)
    return result
}

export const useGetSpecificDay = (dayReq : DayReq) => { 
    return useQuery({
    queryKey: ['day', window.location.href], 
    queryFn: () => fetchedDay(dayReq)}
)
}