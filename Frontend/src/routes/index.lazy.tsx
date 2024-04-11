import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { Relationship, getAllRelationships, getSpecificRelationship } from '../api/RelationshipsAPI';
import { useQuery } from 'react-query';
import Card from '../components/Card';
import DayComponent from '../components/DayComponent';
import { monthAsNumber, today } from '../helpers/DateHelpers';
import { Calendar } from '../components/Calendar'

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  // const [selectedRelationship, setSelectedRelationship] = useState<Relationship>();
  const [showDayView, setShowDayView] = useState<boolean>(true);

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

  if (showDayView) {
    return (
      <section className="flex justify-center bg-background">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-end">
              <button className="btn btn-square btn-sm" onClick={() => setShowDayView(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <DayComponent date={today} month={monthAsNumber} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-background h-screen">
      <Calendar />
    </div>
  )
}