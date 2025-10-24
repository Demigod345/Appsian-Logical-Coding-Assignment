/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TaskItem } from './types';
import './App.css';

const API_URL = 'http://localhost:5123/api/tasks';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err: any) {
      setError('Failed to load tasks. Make sure the backend is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📋 My Task Manager</h1>
        <p className="subtitle">Stay organized and productive</p>
      </header>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
                <span className="task-description">{task.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
