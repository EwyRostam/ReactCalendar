import { createLazyFileRoute } from '@tanstack/react-router'
import AddEmotion from '../components/AddEmotions'
import RenderEmotions from '../components/RenderEmotions'
import { useGetEmotions } from '../hooks/useEmotions';
import { useState } from 'react';
import { Relationship, getAllRelationships } from '../api/RelationshipsAPI';
import { useQuery } from 'react-query';

export const Route = createLazyFileRoute('/')({
  component: Index,
})



export default function Index() {
  const [selectedRelationship, setSelectedRelationship] = useState<Relationship>();

  const stored = sessionStorage.getItem("storedRelationship");
  if(stored)
    {
      
    }

  const handleClick = (rel: Relationship) => {
    setSelectedRelationship(rel);
    sessionStorage.setItem("storedRelationship", `${rel.id}`)
  }

  if (selectedRelationship == null) {
  const { data, isLoading, isError } = useQuery('relationships', getAllRelationships);

    return (
      <>
        {isLoading && <p>Loading...</p>}
        {isError && <p>An error ocurred...</p>}
        {data && data.map(rel =>
          <button className="border border-black" onClick={() => handleClick(rel)}>
            {rel.name}
          </button>)}
      </>
    )
  }

  const emotions = useGetEmotions().data;
  return (
    <>
      <AddEmotion />
      <RenderEmotions emotions={emotions ?? []} />
    </>
  )
}