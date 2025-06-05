'use client';
import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutCardsPanel = () => (
  // <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
  <div className="workout-cards-panel">
    <WorkoutCard
      isRest={false}
      dayName="Monday"
      exercise="Bench Press"
      reps="10"
      sets="3"
      weight="135 lbs"
      onComplete={() => alert('Workout Complete!')}
    />
    <WorkoutCard
      isRest={true}
      onComplete={() => alert('Rest Day Complete!')}
    />
  </div>
);

export default WorkoutCardsPanel;
