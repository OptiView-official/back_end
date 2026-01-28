# OptiView Backend

This directory contains the backend server for the OptiView project.
It provides mock API endpoints to simulate the application's functionality without external dependencies.

## Project Structure

- `src/index.ts`: Entry point of the server.
- `src/routes`: API route definitions and mock implementations.

## Prerequisites

- Node.js 18+
- NPM or Yarn

## Setup and Installation

1. Navigate to the `back_end` directory:
   ```bash
   cd back_end
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

To start the server in development mode:

```bash
npm run dev
```

To build and start for production:

```bash
npm run build
npm start
```

The server will run on port **4000** by default.

## API Endpoints

The backend provides mock data for the following modules:

- `/api/user`: User profile and stats.
- `/api/ai-interaction`: Mock AI chat status and history.
- `/api/checkin`: Daily check-in status.
- `/api/leaderboard`: User rankings.
- `/api/referral`: Referral system data.
- `/api/swap`: Token swap price and quotes.

## Notes

- This backend is **stateless** and uses **mock data**.
- No real database connections (PostgreSQL, Redis) are established.
- No external 3rd-party APIs are called.
