import React, { useState } from 'react';

export default function List() {

    const [task, updateTask ] = useState('')
    const [tasks, updateTasks] = useState([])
    const handleInputChange = event => updateTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()
        if(task.trim()) {
            updateTasks([... tasks, task])
            updateTask('')
        }
       
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input 
                data-testid="form-field"
                onChange={handleInputChange}
                value={task}
                type="text"
                placeholder="new task"
                />
                <button data-testid="form-button" type="submit" > add new task</button>
            </form>
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {  tasks.map((t, index) => (
                        <tr key={index}>
                            <td>{t}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </>
    );
}
