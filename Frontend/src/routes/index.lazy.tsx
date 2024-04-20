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

  const date = today;
  const month = monthAsNumber
  const dayReq: DayReq = { date, month };

  const { data: day } = useGetSpecificDay(dayReq);

  const emotionsList = getEmotionsList(day);

  const dayView = sessionStorage.getItem("dayView");

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