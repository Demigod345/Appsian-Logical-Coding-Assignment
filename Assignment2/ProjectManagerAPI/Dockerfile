# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy csproj first
COPY ProjectManagerAPI.csproj ./

# Restore dependencies
RUN dotnet restore

# Copy everything else
COPY . ./

# Publish the app
RUN dotnet publish -c Release -o out

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

# Expose port 5123
EXPOSE 5123

# Force ASP.NET Core to listen on port 5123
ENV ASPNETCORE_URLS=http://+:5123

ENTRYPOINT ["dotnet", "ProjectManagerAPI.dll"]
