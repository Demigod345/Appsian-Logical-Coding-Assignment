# Appsian Logical Coding Assignment

* **Student Name:** Divyansh Jain
* **Email (College):** [divyansh_j@cs.iitr.ac.in](mailto:divyansh_j@cs.iitr.ac.in)
* **Personal Email:** [divyanshjain.2206@gmail.com](mailto:divyanshjain.2206@gmail.com)
* **Enrollment Number:** 22114032
* **Repository:** [https://github.com/Demigod345/Appsian-Logical-Coding-Assignment](https://github.com/Demigod345/Appsian-Logical-Coding-Assignment)
* **Last Updated:** 26th October 2025

---

## Deployed Sites (Bonus)

As part of the bonus section of the assignment, **Assignment 2 – Mini Project Manager** has been deployed online:

* **Backend:** [https://appsian-logical-coding-assignment.onrender.com](https://appsian-logical-coding-assignment.onrender.com)
* **Frontend:** [https://appsian-logical-coding-assignment.vercel.app](https://appsian-logical-coding-assignment.vercel.app)

> These live deployments allow you to try the application without running it locally.

---

## Overview

This repository contains **two full-stack applications** developed as part of the logical coding assignment for **Appsian Tech Private Limited**:

1. **Assignment 1 – Task Manager Application**
   A lightweight task management app with modern UI and real-time stats.

2. **Assignment 2 – Mini Project Manager**
   An advanced project and task management system with **task dependencies**, **circular dependency prevention**, and a **smart scheduler**.

Both projects are built with **.NET backend** and **React frontend**, showcasing REST APIs, JWT authentication, responsive UI, and clean coding practices.

---

## Features

### Assignment 1 – Task Manager Application

* Create, mark complete, and delete tasks
* Real-time task statistics and progress tracking
* Modern gradient UI with smooth animations
* Responsive design for desktop and mobile

### Assignment 2 – Mini Project Manager

* User registration and login with JWT authentication (7-day tokens)
* CRUD operations for **projects** and **tasks**
* Define task dependencies with **circular dependency prevention**
* **Smart Scheduler** recommends task completion order using topological sorting
* Responsive, mobile-friendly interface with UX improvements

---

## Technology Stack

**Backend**

* .NET 8.0+ / 9.0 Minimal API
* JWT Authentication
* SHA256 password hashing
* In-memory storage (for demonstration)
* Services: `AuthService`, `SchedulingService` (Assignment 2)

**Frontend**

* React 18+ / 19+ with TypeScript
* React Router v6
* Axios with interceptors for API calls
* Loading indicators (`react-loader-spinner`)
* LocalStorage for JWT persistence
* CSS3 with gradients and animations

---

## Repository Structure

```
./
├── Assignment1
│   ├── BasicTaskManager/       # .NET Backend
│   └── task-manager-ui/        # React Frontend
├── Assignment2
│   ├── ProjectManagerAPI/      # .NET Backend
│   └── project-manager-ui/     # React Frontend
└── README.md
```

---

## Setup & Run

### Prerequisites

* [.NET 9.0 SDK](https://dotnet.microsoft.com/download)
* [Node.js v16+](https://nodejs.org/) and npm
* Git

Verify installations:

```bash
dotnet --version   # 9.x.x
node --version     # v16.x.x or higher
npm --version      # 8.x.x or higher
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/Demigod345/Appsian-Logical-Coding-Assignment
cd Appsian-Logical-Coding-Assignment
```

### 2. Start Backend & Frontend

#### Assignment 1

```bash
# Backend
cd Assignment1/BasicTaskManager
dotnet restore
dotnet run --launch-profile http

# Frontend (new terminal)
cd Assignment1/task-manager-ui
npm install
npm start
```

#### Assignment 2

```bash
# Backend
cd Assignment2/ProjectManagerAPI
dotnet restore
dotnet run --launch-profile http

# Frontend (new terminal)
cd Assignment2/project-manager-ui
npm install
npm start
```

> Or access the **deployed Assignment 2** directly via the **Deployed Sites (Bonus)** links above.

---

## API Endpoints

### Assignment 1 – Task Manager

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | `/api/tasks`      | Get all tasks          |
| POST   | `/api/tasks`      | Create a task          |
| PUT    | `/api/tasks/{id}` | Update task completion |
| DELETE | `/api/tasks/{id}` | Delete a task          |

### Assignment 2 – Mini Project Manager

**Auth**

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| POST   | `/api/auth/register` | Register user   |
| POST   | `/api/auth/login`    | Login & get JWT |

**Projects & Tasks**

| Method | Endpoint                             | Description                   |
| ------ | ------------------------------------ | ----------------------------- |
| GET    | `/api/projects`                      | List all projects             |
| POST   | `/api/projects`                      | Create a project              |
| GET    | `/api/projects/{id}`                 | Get project details           |
| DELETE | `/api/projects/{id}`                 | Delete a project              |
| GET    | `/api/projects/{projectId}/tasks`    | List tasks in project         |
| POST   | `/api/projects/{projectId}/tasks`    | Create task with dependencies |
| PUT    | `/api/tasks/{id}`                    | Update task                   |
| DELETE | `/api/tasks/{id}`                    | Delete task                   |
| POST   | `/api/projects/{projectId}/schedule` | Run smart scheduler           |

---

## Usage

* **Add a Task/Project** – Fill the form and submit
* **Complete a Task** – Click checkbox
* **Delete a Task/Project** – Click delete button
* **Schedule Tasks** – Run scheduler to get recommended order (Assignment 2)
* **View Stats** – Dashboard or footer (Assignment 1)

---

## Notes

* Both applications use in-memory storage (data is lost on backend restart)
* Backend allows all origins for development (CORS enabled)
* Ports 5123 (backend) and 3000 (frontend) must be available

---

## Troubleshooting

* Backend not starting: verify .NET version, check ports, run `dotnet clean`
* Frontend not starting: delete `node_modules`, run `npm install`, clear npm cache
* CORS errors: ensure backend is running before frontend

---

## Contributing

This project is for **educational purposes**. Feel free to fork and experiment.

---

**Built with ❤️ using .NET and React**
