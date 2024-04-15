import { Navigate, createLazyFileRoute } from '@tanstack/react-router'
import { monthAsNumber, today } from '../helpers/DateHelpers';
import { Calendar } from '../components/Calendar'
import { DayReq } from '../api/daysAPI/Types';
import { useGetSpecificDay } from '../hooks/useGetSpecificDay';
import { useState } from 'react';
import { Relationship } from '../api/relationshipsAPI/Types';
import { getAllRelationships, getSpecificRelationship } from '../api/relationshipsAPI/RelationshipsAPI';
import { useQuery } from 'react-query';
import RelCard from '../components/RelCard';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  const [selectedRelationship, setSelectedRelationship] = useState<Relationship>();


  const stored = sessionStorage.getItem("storedRelationship");
  if (stored) {
    const keyAsInt = parseInt(stored);
    const restoreSelected = async () => {
      const result = await getSpecificRelationship(keyAsInt)
      setSelectedRelationship(result);
    }
    restoreSelected();
  }

  const handleClick = (rel: Relationship) => {
    setSelectedRelationship(rel);
    sessionStorage.setItem("storedRelationship", `${rel.id}`)
  }
  const { data, isLoading, isError } = useQuery('relationships', getAllRelationships);

  if (selectedRelationship == null) {
    console.log(data)
    return (
      <div className="h-screen flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error ocurred...</p>}
        {data && data.map(rel =>
          <RelCard rel={rel} key={rel.id} handleClick={handleClick} />)}
      </div>
    )
  }


  const date = today;
  const month = monthAsNumber
  const dayReq: DayReq = { date, month };


  const { data: day } = useGetSpecificDay(dayReq);


  const dayView = sessionStorage.getItem("dayView");


  if (!day && !dayView) {
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