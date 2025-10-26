# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

# Expose port 5123
EXPOSE 5123

# Start the app and force ASP.NET Core to use port 5123
ENV ASPNETCORE_URLS=http://+:5123
ENTRYPOINT ["dotnet", "ProjectManagerAPI.dll"]
