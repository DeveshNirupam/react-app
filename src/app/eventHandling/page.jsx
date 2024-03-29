'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskList, setTaskList] = useState([
        { text: 'Do Coding', completed: false },
        { text: 'Play Games', completed: false },
        { text: 'Bring Milk', completed: false },
    ]);

    const addTask = (e) => {
        console.log(e.key);
    }

    return (
        <div className='bg-primary-subtle vh-100'>
            <div className='container py-5'>

                <h1 className='display-3 fw-bold text-center'>Todo List</h1>

                <div className='card shadow'>
                    <div className='card-header py-3'>
                        <input
                            type="text"
                            className='form-control border-primary border-3'
                            onKeyDown={addTask}
                        />
                    </div>
                    <div className='card-body'></div>
                </div>
            </div>
        </div>
    )
}

export default TodoList;