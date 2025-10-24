using BasicTaskManager.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Configure CORS for React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithExposedHeaders("Content-Type"));
});

var app = builder.Build();

app.UseCors("AllowFrontend");

// In-memory task storage
var tasks = new List<TaskItem>();

// GET: Retrieve all tasks
app.MapGet("/api/tasks", () => 
{
    return Results.Ok(tasks);
});

// POST: Create a new task
app.MapPost("/api/tasks", ([FromBody] CreateTaskDto dto) =>
{
    if (string.IsNullOrWhiteSpace(dto.Description))
    {
        return Results.BadRequest(new { message = "Task description cannot be empty" });
    }

    var task = new TaskItem
    {
        Id = Guid.NewGuid(),
        Description = dto.Description.Trim(),
        IsCompleted = false
    };
    
    tasks.Add(task);
    return Results.Created($"/api/tasks/{task.Id}", task);
});

// PUT: Update task completion status
app.MapPut("/api/tasks/{id}", (Guid id, [FromBody] UpdateTaskDto dto) =>
{
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task == null)
    {
        return Results.NotFound(new { message = "Task not found" });
    }

    task.IsCompleted = dto.IsCompleted;
    return Results.Ok(task);
});

// DELETE: Remove a task
app.MapDelete("/api/tasks/{id}", (Guid id) =>
{
    var task = tasks.FirstOrDefault(t => t.Id == id);
    if (task == null)
    {
        return Results.NotFound(new { message = "Task not found" });
    }

    tasks.Remove(task);
    return Results.NoContent();
});

app.Run();

public record CreateTaskDto(string Description);
public record UpdateTaskDto(bool IsCompleted);
