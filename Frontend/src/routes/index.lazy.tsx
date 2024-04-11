import { Navigate, createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react';
import DayComponent from '../components/DayComponent';
import { monthAsNumber, today } from '../helpers/DateHelpers';
import { Calendar } from '../components/Calendar'
import { DayReq, DayRes, getSpecificDay } from '../api/DaysAPI';
import { useQuery } from 'react-query';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  // const [selectedRelationship, setSelectedRelationship] = useState<Relationship>();


  // const stored = sessionStorage.getItem("storedRelationship");
  // if (stored) {
  //   const keyAsInt = parseInt(stored);
  //   const restoreSelected = async () => {
  //     const result = await getSpecificRelationship(keyAsInt)
  //     setSelectedRelationship(result);
  //   }
  //   restoreSelected();
  // }

  // const handleClick = (rel: Relationship) => {
  //   setSelectedRelationship(rel);
  //   sessionStorage.setItem("storedRelationship", `${rel.id}`)
  // }
  // const { data, isLoading, isError } = useQuery('relationships', getAllRelationships);

  // if (selectedRelationship == null) {
  //   console.log(data)
  //   return (
  //     <div className="h-screen flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
  //       {isLoading && <p>Loading...</p>}
  //       {isError && <p>An error ocurred...</p>}
  //       {data && data.map(rel =>
  //         <Card rel={rel} key={rel.id} handleClick={handleClick} />)}
  //     </div>
  //   )
  // }
  const date = today;
  const month = monthAsNumber
  const dayReq: DayReq = { date, month };


  const fetchedDay = async () => {
    const result = await getSpecificDay(dayReq)
    const { emotions } = result as DayRes
    const { $values } = emotions
    return $values
}

const { data: emotions} = useQuery('day', fetchedDay);

const dayView = sessionStorage.getItem("dayView");
  

  if (!emotions && !dayView) {
    return (
      <Navigate to="/day" search={{date: date, month: month}}/>
    )
  }

  return (
    <div className="bg-background h-screen">
      <Calendar />
    </div>
  )
}