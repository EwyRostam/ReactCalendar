import { QueryObserver, useQuery, useQueryClient } from "react-query"
import { getAllEmotions } from "../api/emotoinsAPI/EmotionsAPI"
import { useEffect, useState } from "react"
import { Feeling } from "../api/emotoinsAPI/Types"

const key = 'emotions'

export const useGetEmotions = () => {
    return useQuery([key], getAllEmotions)
}

export const useGetEmotionsObserver = () => {
    const get_emotions = useGetEmotions();

    const queryClient = useQueryClient();

    const [emotions, setEmotions] = useState<Feeling[]>(() => {
        const data = queryClient.getQueryData<Feeling[]>([key])
        return data ?? []
    })

    useEffect(() => {
        const observer = new QueryObserver<Feeling[]>(queryClient, {queryKey: [key]})

        const unsubscribe = observer.subscribe(result => {
            if (result.data) setEmotions(result.data)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return {
        ...get_emotions,
        data: emotions,
    }
}