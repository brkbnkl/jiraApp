import React, { useState } from 'react'
import TaskCreate from './TaskCreate'
import { useContext } from 'react'
import TasksContext from '../context/task'

function TaskShow({ task }) {

    const { deleteTaskbyId, editTaskById } = useContext(TasksContext);

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        deleteTaskbyId(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(true)
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false)
        editTaskById(id, updatedTitle, updatedTaskDesc)
    }
    return (
        <div className='task-show'>
            {showEdit ? (<TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />) : (<div>
                <h3 className='task-title'>Task Title:</h3>
                <p>{task.title}</p>
                <h3 className='task-title'>Task Description:</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button className='task-delete' onClick={handleDeleteClick}>Delete</button>
                    <button className='task-edit' onClick={handleEditClick}>Update</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default TaskShow
