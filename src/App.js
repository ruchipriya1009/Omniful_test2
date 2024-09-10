import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/actions';
import TaskList from './components/TaskList';

const App = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        // Simulate fetching tasks on mount
        console.log('Component mounted');
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTask({ id: Date.now(), text: input }));
            setInput('');
            inputRef.current.focus();
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                />
                <button type="submit">Add Task</button>
            </form>
            <React.Suspense fallback={<div>Loading...</div>}>
                <TaskList tasks={tasks} onDelete={handleDelete} />
            </React.Suspense>
        </div>
    );
};

export default App;