<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh


# Dashboard-login
a simple login and dashboard pages 
>>>>>>> origin/main
>>>>>>> A React-based dashboard application for managing campaigns. This application allows users to sign in, view recent campaigns, add new campaigns, and edit existing campaigns. The project uses Redux for state management and interacts with an API for data operations.

Table of Contents
Features
Tech Stack
Installation
Usage
API
Components
Contributing


Features
User Authentication: Users can sign in to access the dashboard.

Campaign Management: View recent campaigns, add new campaigns, and edit existing campaigns.
Responsive Design: The application is designed to be responsive and user-friendly on various devices.

Tech Stack
Frontend: React.js, Redux, Tailwind CSS
Backend: Interacts with external API
State Management: Redux Toolkit
Routing: React Router

Installation
Clone the repository:
git clone https://github.com/your-username/campaign-dashboard.git
cd campaign-dashboard

Install dependencies:
npm install
Set up environment variables:
Create a .env file in the root of the project and add the necessary environment variables. For example:
REACT_APP_API_URL=https://test.quups.app/api

Usage
Sign In:

Use the sign-in form to log in with your credentials.
After signing in, you will be redirected to the dashboard.
View Campaigns:

The dashboard displays recent campaigns with their statuses.
Add New Campaign:

Click on the "Add Campaign" button to open a modal.
Fill in the campaign details and save.
Edit Campaign:

Click on the "Edit" button on any campaign card to open the edit modal.
Update the campaign details and save.
API
The project interacts with the following endpoints:

Sign In: POST /signin
Fetch Campaign by ID: GET /campaigns/:id

Components
Login: Handles user authentication.
Dashboard: Displays the main dashboard with campaign information.
Campaign: Fetches and displays campaign details.
Edit: Handles the display and functionality of the edit campaign modal.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
