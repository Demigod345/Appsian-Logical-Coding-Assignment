/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { TaskItem } from './types';
import './App.css';

const API_URL = 'http://localhost:5123/api/tasks';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedDesc = newTaskDesc.trim();
    
    if (!trimmedDesc) return;

    try {
      setIsSubmitting(true);
      setError(null);
      const response = await axios.post(API_URL, { description: trimmedDesc });
      setTasks([...tasks, response.data]);
      setNewTaskDesc('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add task');
      console.error('Error adding task:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleComplete = async (task: TaskItem) => {
    try {
      setError(null);
      const updatedStatus = !task.isCompleted;
      await axios.put(`${API_URL}/${task.id}`, { isCompleted: updatedStatus });
      setTasks(tasks.map(t =>
        t.id === task.id ? { ...t, isCompleted: updatedStatus } : t
      ));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update task');
      console.error('Error updating task:', err);
    }
  };

  const handleDeleteTask = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      setError(null);
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete task');
      console.error('Error deleting task:', err);
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

      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={newTaskDesc}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTaskDesc(e.target.value)}
          placeholder="What needs to be done?"
          disabled={isSubmitting}
          maxLength={200}
        />
        <button type="submit" disabled={isSubmitting || !newTaskDesc.trim()}>
          {isSubmitting ? 'Adding...' : '+ Add Task'}
        </button>
      </form>

      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet. Add your first task to get started!</p>
          </div>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
                <label className="task-item">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleToggleComplete(task)}
                  />
                  <span className="task-description">{task.description}</span>
                </label>
                <button
                  className="delete-button"
                  onClick={(e) => handleDeleteTask(task.id, e)}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className="task-stats">
        <span>{tasks.filter(t => !t.isCompleted).length} tasks remaining</span>
        <span>{tasks.length} total</span>
      </footer>
    </div>
  );
}

export default App;
