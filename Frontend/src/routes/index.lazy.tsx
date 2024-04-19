import { Navigate, createLazyFileRoute } from '@tanstack/react-router'
import { monthAsNumber, today } from '../helpers/DateHelpers';
import { Calendar } from '../components/Calendar'
import { DayReq } from '../api/daysAPI/Types';
import { useGetSpecificDay } from '../hooks/useGetSpecificDay';
import { Relationship } from '../api/relationshipsAPI/Types';
import { getAllRelationships } from '../api/relationshipsAPI/RelationshipsAPI';
import { useQuery } from 'react-query';
import RelCard from '../components/RelCard';
import { useState } from 'react';
import { getEmotionsList } from '../helpers/FilterDayHelpers';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  const [activeRelationship, setActiveRelationship] = useState<number | undefined>();
  const stored = sessionStorage.getItem("storedRelationship");
 
  const { data, isLoading, isError } = useQuery('relationships', getAllRelationships);

  const date = today;
  const month = monthAsNumber
  const dayReq: DayReq = { date, month };


  const { data: day } = useGetSpecificDay(dayReq);

  const emotionsList = getEmotionsList(day);


  const dayView = sessionStorage.getItem("dayView");


  const handleClick = (rel: Relationship) => {
    sessionStorage.setItem("storedRelationship", `${rel.id}`)
    setActiveRelationship(rel.id);
  }


  if (stored == null) {
    return (
      <div className="h-screen flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error ocurred...</p>}
        {data && data.map(rel =>
          <RelCard rel={rel} key={rel.id} handleClick={handleClick} />)}
      </div>
    )
  }


  if (emotionsList.length < 0 && !dayView) {
    return (
      <Navigate to="/day" search={{ date: date, month: month }} />
    )
  }

  
  return (
    <div className="bg-background h-screen">
      <Calendar />
    </div>
  )
}