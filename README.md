# 📋 Task Manager Application

A modern, full-stack task management application with a beautiful gradient UI.

## ✨ Features

- **Create Tasks** - Add new tasks with a simple form
- **Mark Complete** - Check off tasks as you complete them
- **Delete Tasks** - Remove tasks you no longer need
- **Real-time Stats** - See your progress at a glance
- **Responsive Design** - Works on desktop and mobile
- **Modern UI** - Beautiful gradient design with smooth animations

## 🛠️ Technology Stack

### Backend
- **.NET 9.0** - Modern web API framework
- **Minimal APIs** - Lightweight endpoint definitions
- **In-memory Storage** - Fast, session-based data storage
- **CORS Enabled** - Secure cross-origin requests

### Frontend
- **React 19** - Latest React with TypeScript
- **TypeScript** - Type-safe development
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations

## 📋 Prerequisites

Before running this application, ensure you have:

- **.NET 9.0 SDK** - [Download here](https://dotnet.microsoft.com/download)
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### Verify Installations

```bash
dotnet --version  # Should show 9.x.x
node --version    # Should show v16.x.x or higher
npm --version     # Should show 8.x.x or higher
git --version     # Should show 2.x.x or higher
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd assn1
```

### 2. Start the Backend

```bash
cd BasicTaskManager
dotnet restore
dotnet run --launch-profile http
```

The API will start at: **http://localhost:5123**

### 3. Start the Frontend

Open a new terminal:

```bash
cd task-manager-ui
npm install
npm start
```

The app will open at: **http://localhost:3000**

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Retrieve all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/{id}` | Update task completion status |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

### Example Requests

**Create a Task:**
```bash
curl -X POST http://localhost:5123/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"description": "Learn React"}'
```

**Get All Tasks:**
```bash
curl http://localhost:5123/api/tasks
```

## 📁 Project Structure

```
assn1/
├── BasicTaskManager/              # .NET Backend
│   ├── Models/
│   │   └── TaskItem.cs           # Task data model
│   ├── Properties/
│   │   └── launchSettings.json   # Launch configuration
│   ├── Program.cs                # API endpoints
│   └── BasicTaskManager.csproj   # Project file
│
└── task-manager-ui/              # React Frontend
    ├── public/
    │   └── index.html            # HTML template
    ├── src/
    │   ├── App.tsx               # Main component
    │   ├── App.css               # Styling
    │   ├── types.ts              # TypeScript types
    │   └── index.tsx             # Entry point
    └── package.json              # Dependencies
```

## 🎨 Usage

1. **Add a Task** - Type in the input field and click "Add Task"
2. **Complete a Task** - Click the checkbox next to any task
3. **Delete a Task** - Click the red "✕" button
4. **View Stats** - Check the footer for task counts

## ⚠️ Important Notes

- **In-Memory Storage** - Tasks are stored in memory and will be lost when the backend restarts
- **Development Mode** - This setup is for development only
- **CORS** - Backend allows all origins for development
- **Port Requirements** - Ensure ports 5123 and 3000 are available

## 🐛 Troubleshooting

### Backend won't start
- Verify .NET 9.0 is installed: `dotnet --version`
- Check if port 5123 is in use
- Run `dotnet clean` then `dotnet build`

### Frontend won't start
- Delete `node_modules` and run `npm install` again
- Check if port 3000 is in use
- Clear npm cache: `npm cache clean --force`

### CORS errors
- Ensure backend is running before starting frontend
- Check that API_URL in App.tsx matches backend URL

### Cannot connect to API
- Verify backend is running on port 5123
- Check browser console for errors
- Try accessing http://localhost:5123/api/tasks directly

## 🔧 Development

### Running Tests

Backend:
```bash
cd BasicTaskManager
dotnet test
```

Frontend:
```bash
cd task-manager-ui
npm test
```

### Building for Production

Backend:
```bash
cd BasicTaskManager
dotnet publish -c Release
```

Frontend:
```bash
cd task-manager-ui
npm run build
```

## 📝 Git Commit History

This project was built with structured commits:

1. Initialize project repository
2. Create .NET Web API project with data models
3. Implement RESTful API with CRUD operations
4. Initialize React TypeScript application
5. Add TypeScript interfaces for type safety
6. Implement task list display with loading states
7. Add task creation with form validation
8. Implement task completion toggle with checkbox
9. Add task deletion with confirmation
10. Apply modern gradient design with enhanced styling
11. Create comprehensive project documentation

View commits:
```bash
git log --oneline
```

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment!

## 📄 License

This project is for educational purposes only.

## 🔗 Resources

- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Axios Documentation](https://axios-http.com/docs/intro)

---

**Built with ❤️ using .NET and React**

Last updated: 2025
