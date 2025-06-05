'use client';
import React, { useState } from 'react';


const CARD_COUNT = 7;
const initialCards = [
    { type: 'exercise', name: 'Name of exercise', complete: false },
    { type: 'rest', name: 'Rest', complete: false },
    { type: 'exercise', name: 'Name of exercise', complete: false },
    { type: 'rest', name: 'Rest', complete: true },
    { type: 'exercise', name: 'Name of exercise', complete: false },
    { type: 'exercise', name: 'Name of exercise', complete: false },
    { type: 'exercise', name: 'Name of exercise', complete: false },
];

export default function DashboardPage() {
    const [cards] = useState(initialCards);

    return (
        <>
            <h1 className="page-title">Dashboard</h1>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="dashboard-selector-row">
                        <div className="custom-select-wrapper">
                            <select className="dashboard-selector">
                                <option>Workout name</option>
                                <option>Push Day</option>
                                <option>Pull Day</option>
                            </select>
                            <span className="custom-arrow">▼</span>
                        </div>
                    </div>
                    <div className="dashboard-drag-row">
                        <span className="dashboard-arrange-tip">&lt;click and drag to arrange&gt;</span>
                    </div>
                </div>
                <div className="dashboard-cards-row">
                    {cards.map((card, i) => (
                        <div
                            className={`dashboard-card${card.type === 'rest' ? ' rest' : ''}${card.complete ? ' complete' : ''}`}
                            key={i}
                        >
                            <div className="dashboard-card-title">{card.name}</div>
                            <div className="dashboard-card-status">
                                {card.complete ? (
                                    <span>complete</span>
                                ) : (
                                    <span>not complete</span>
                                )}
                                <button className="dashboard-edit-btn"><span>Edit</span><span>✎</span></button>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="dashboard-actions-row">
                    <button className="dashboard-action-btn">View</button>
                    <button className="dashboard-action-btn">Save</button>
                    <button className="dashboard-action-btn">Delete</button>
                    <button className="dashboard-action-btn">Reset</button>
                </div>
            </div>
        </>
    );
}