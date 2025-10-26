# Project & Task Manager Projects

**Logical Coding Assignment** – Appsian Tech Private Limited

- **Student Name:** Divyansh Jain
- **Email:** [divyansh_j@cs.iitr.ac.in](mailto:divyansh_j@cs.iitr.ac.in)
- **Enrollment Number:** 22114032
- **Last Updated:** 26th October 2025

---

## Overview

This repository contains two full-stack task and project management applications developed as part of a logical coding assignment:

1. **Mini Project Manager** – Advanced project management system with task dependencies and smart scheduling.
2. **Task Manager Application** – Lightweight task management application with a modern gradient UI.

Both applications are developed using **.NET backend** and **React frontend**, demonstrating REST API integration, JWT authentication, and responsive UI design.

---

## Features

### Mini Project Manager

* User registration and login with JWT authentication (7-day tokens)
* Create, read, update, and delete projects and tasks
* **Task Dependencies & Circular Dependency Prevention**
* **Smart Scheduler** using topological sorting to recommend task completion order
* Responsive and mobile-friendly UI with UX improvements

### Task Manager Application

* Create, mark complete, and delete tasks
* Real-time task stats and progress
* Modern gradient UI with smooth animations
* Responsive design for desktop and mobile

---

## Technology Stack

**Backend**

* .NET 8.0+ / 9.0 Minimal API
* JWT Authentication
* In-memory storage (for demonstration)
* SHA256 password hashing
* Services: `AuthService`, `SchedulingService` (for Mini Project Manager)

**Frontend**

* React 18+ / 19+ with TypeScript
* React Router v6
* Axios with interceptors
* `react-loader-spinner` for loading indicators
* LocalStorage for JWT persistence
* CSS3 with gradient styling and animations

---

## Setup & Run

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Start the Backend

```bash
# Navigate to backend folder
cd ProjectManagerAPI  # Mini Project Manager
# or
cd BasicTaskManager   # Task Manager Application

dotnet restore
dotnet run --launch-profile http
```

API endpoints: **[http://localhost:5123](http://localhost:5123)**

### 3. Start the Frontend

```bash
cd project-manager-ui  # Mini Project Manager
# or
cd task-manager-ui     # Task Manager Application

npm install
npm start
```

Frontend: **[http://localhost:3000](http://localhost:3000)**

---

## API Endpoints

### Auth (Mini Project Manager)

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and receive JWT |

### Projects & Tasks (Mini Project Manager)

| Method | Endpoint                             | Description                     |
| ------ | ------------------------------------ | ------------------------------- |
| GET    | `/api/projects`                      | List all projects               |
| POST   | `/api/projects`                      | Create a project                |
| GET    | `/api/projects/{id}`                 | Get project details             |
| DELETE | `/api/projects/{id}`                 | Delete a project                |
| GET    | `/api/projects/{projectId}/tasks`    | List all tasks in project       |
| POST   | `/api/projects/{projectId}/tasks`    | Create a task with dependencies |
| PUT    | `/api/tasks/{id}`                    | Update task                     |
| DELETE | `/api/tasks/{id}`                    | Delete task                     |
| POST   | `/api/projects/{projectId}/schedule` | Run smart scheduler             |

### Tasks (Task Manager Application)

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | `/api/tasks`      | Retrieve all tasks     |
| POST   | `/api/tasks`      | Create a new task      |
| PUT    | `/api/tasks/{id}` | Update task completion |
| DELETE | `/api/tasks/{id}` | Delete a task          |

---

## Project Structure

```
MiniProjectManager/
├── ProjectManagerAPI/          # .NET backend
└── project-manager-ui/        # React frontend

TaskManagerApplication/
├── BasicTaskManager/          # .NET backend
└── task-manager-ui/           # React frontend
```

---

## Usage

* **Add a Task** – Fill the form and submit
* **Complete a Task** – Click the checkbox
* **Delete a Task** – Click the delete button
* **View Stats** – Check the dashboard or footer (Task Manager)
* **Schedule Tasks** – Run the scheduler to get recommended order (Mini Project Manager)

---

## Notes

* Both applications use in-memory storage; data is lost on backend restart
* Backend allows all origins for development (CORS enabled)
* Ensure ports 5123 and 3000 are available

---

## Troubleshooting

* Backend not starting: check `.NET` version, ports, or run `dotnet clean`
* Frontend not starting: delete `node_modules`, reinstall dependencies, clear cache
* CORS errors: ensure backend is running before frontend

---

## Contributing

This project is for educational purposes. Feel free to fork and experiment.

---

## License

Educational use only.

---

**Built with ❤️ using .NET and React**

