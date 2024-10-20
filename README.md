The House Hunt platform is a comprehensive property management system designed to simplify the interactions between property owners, renters, and administrators. The project is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and consists of two main components:

Frontend: Built with React, providing a user-friendly interface for browsing, booking, and managing properties.
Backend: Developed using Node.js and Express.js, handling property listings, bookings, user authentication, and database operations.
Code Folder Structure
1. House(Frontend)
Contains the React frontend code, focusing on user interaction, property browsing, and booking features. Key components include:

Components: Reusable UI elements.
Pages: Main screens for users, like property listings, booking, and user profiles.
Redux: State management for application-wide data like user authentication and property details.
Styles: CSS files for the UI design.
2. backend/
Handles server-side logic and API endpoints to manage:

User authentication (renters, property owners).
Property management (adding, updating, deleting properties).
Booking process (searching, booking properties).
MongoDB integration for data storage.
Security: Token-based authentication for secure access to user data.
Key Features

Booking System: Renters can book available properties.
Admin Dashboard: For managing users, properties, and bookings.
Authentication: Secure login and registration for users.
