import React from 'react';

const TaskList = React.lazy(() => import('./TaskList'));

const TaskListComponent = ({ tasks, onDelete }) => (
    <ul>
        {tasks.map(task => (
            <li key={task.id}>
                {task.text}
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TaskListComponent;