# Docker Setup for My Shop App

This project includes Docker Compose configurations to run both the backend and frontend services together.

## Available Services

-   **Backend HTTP API**: Runs on port 4200
-   **Backend GraphQL API**: Runs on port 4000
-   **Frontend**: Runs on port 3000

## Quick Start

### Production Mode

```bash
# Build and start all services in production mode
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

### Development Mode

```bash
# Build and start all services in development mode with hot reloading
docker-compose -f docker-compose.dev.yml up --build

# Or run in detached mode
docker-compose -f docker-compose.dev.yml up -d --build
```

## Accessing the Application

After starting the services:

-   **Frontend**: http://localhost:3000
-   **Backend HTTP API**: http://localhost:4200
-   **Backend GraphQL API**: http://localhost:4000

## Development Features

The development configuration (`docker-compose.dev.yml`) includes:

-   **Hot Reloading**: Code changes are automatically reflected without rebuilding
-   **Volume Mounting**: Source code is mounted as volumes for live updates
-   **Development Commands**: Uses development-specific npm scripts

## Useful Commands

```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f backend-http

# Rebuild a specific service
docker-compose build backend-http

# Access container shell
docker-compose exec backend-http sh
```

## Environment Variables

The services use the following environment variables:

-   `NODE_ENV`: Set to `production` or `development`
-   `PORT`: Port number for the service
-   `VITE_API_URL`: Frontend API URL (development)
-   `VITE_GRAPHQL_URL`: Frontend GraphQL URL (development)

## Troubleshooting

1. **Port Conflicts**: Make sure ports 3000, 4000, and 4200 are available
2. **Build Issues**: Try rebuilding with `docker-compose build --no-cache`
3. **Permission Issues**: On Linux/Mac, you might need to use `sudo` for Docker commands
4. **Volume Issues**: If node_modules conflicts occur, try `docker-compose down -v` and rebuild
