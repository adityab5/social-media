
## Backend

The backend is located in the `backend/` directory and includes:

- `app.js`: Main application file.
- `config/`: Configuration files for cloud services and database connections.
- `controllers/`: Controllers for handling requests.
- `middlewares/`: Middleware functions for authentication, error handling, and file uploads.
- `models/`: Database models.
- `routes/`: Route definitions.
- `server.js`: Server setup and initialization.

### Setup

1. Navigate to the `backend/` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file based on `.env.sample` and fill in the required environment variables.
4. Start the server:
    ```sh
    npm run dev
    ```

## Frontend

The frontend is located in the `frontend/` directory and includes:

- `index.html`: Main HTML file.
- `src/`: Source files for the frontend application.
- `public/`: Public assets.
- Configuration files for ESLint, PostCSS, Tailwind CSS, Vercel, and Vite.

### Setup

1. Navigate to the `frontend/` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

## Deployment

Instructions for deploying the application will go here.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
