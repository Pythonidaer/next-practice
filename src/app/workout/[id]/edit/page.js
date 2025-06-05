"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        repRange: "10-12",
        sets: "3",
        day: "2",
        details: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: Save logic
        alert("Workout saved! (stub)");
    }

    return (
        <>
            <h1 className="page-title">
                Create a Workout &gt; Edit workout
            </h1>
            <div className="edit-workout-page-container">
                <form className="edit-workout-form" onSubmit={handleSubmit} autoComplete="off">
                    <div className="edit-workout-fields">
                        <div className="edit-workout-row">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="edit-workout-input"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="edit-workout-row">
                            <label htmlFor="repRange">Rep range</label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="repRange"
                                    name="repRange"
                                    className="edit-workout-selector"
                                    value={form.repRange}
                                    onChange={handleChange}
                                >
                                    <option value="10-12">10-12</option>
                                    <option value="8-10">8-10</option>
                                    <option value="12-15">12-15</option>
                                </select>
                                <span className="custom-arrow">▼</span>
                            </div>
                        </div>
                        <div className="edit-workout-row">
                            <label htmlFor="sets">Sets</label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="sets"
                                    name="sets"
                                    className="edit-workout-selector"
                                    value={form.sets}
                                    onChange={handleChange}
                                >
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <span className="custom-arrow">▼</span>
                            </div>
                        </div>
                        <div className="edit-workout-row">
                            <label htmlFor="day">Day</label>
                            <div className="custom-select-wrapper">
                                <select
                                    id="day"
                                    name="day"
                                    className="edit-workout-selector"
                                    value={form.day}
                                    onChange={handleChange}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <span className="custom-arrow">▼</span>
                            </div>
                        </div>
                        <div className="edit-workout-row">
                            <label style={{ marginTop: "10px", alignSelf: "start" }} htmlFor="details">Details</label>
                            <textarea
                                id="details"
                                name="details"
                                className="edit-workout-textarea"
                                value={form.details}
                                onChange={handleChange}
                                placeholder="Details"
                                rows={4}
                            />
                        </div>
                        <div className="edit-workout-actions">
                            <button type="submit" className="dashboard-action-btn">Save</button>
                            <button
                                type="button"
                                className="dashboard-action-btn"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

