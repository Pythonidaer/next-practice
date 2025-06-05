'use client';
import React from 'react';
import CompleteButton from './shared/CompleteButton';

const WorkoutCard = ({ isRest, dayName, exercise, reps, sets, weight, onComplete }) => {
  if (isRest) {
    return (
      <div className="workout-card">
        <div className="card-title">Rest day</div>
        <CompleteButton onClick={onComplete} />
      </div>
    );
  }

  return (
    <div className="workout-card">
      <div className="input-row"><span className="card-title">Day name</span></div>
      <div className="input-row"><span className="input-label">Exercise</span></div>
      <div className="input-row"><span className="input-label">Reps</span></div>
      <div className="input-row"><span className="input-label">Sets</span></div>
      <div className="input-row"><span className="input-label">Weight</span></div>
      <CompleteButton onClick={onComplete} />
    </div>
  );
};

export default WorkoutCard;
