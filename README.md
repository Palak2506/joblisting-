# Job Listing Web Application
A dynamic job listing web application built with the MERN stack. Users can view job opportunities, click on a job to see its details, and filter jobs by location.

# Frontend
- Displays a list of jobs on the left-hand side of the screen with:
  - Job Title
  - Location
  - Employment Type
  - Posted Date
  - Source
  - Experience Range
- Click on a job to dynamically display its details (title, location, description) on the right-hand side.
- Location search feature to filter jobs based on user input.

# Backend
- Uses a provided JSON file as the data source.
- MongoDB schema created based on JSON data and imported into the database.
- RESTful API endpoints:
  - Fetch all job data
  - Filter jobs by location

---

## Tech Stack

- Frontend: React.js, Tailwind CSS  
- Backend: Node.js, Express.js, Mongoose  
- Database: MongoDB  

---

# Deployed Links

- Frontend: [Frontend Live Link] https://joblistingfrontend-pearl.vercel.app/
- Backend:[Backend Live Link] https://joblistingbackend-6pww.onrender.com//jobs

---

# (Run Locally)

### Prerequisites
- Node.js and npm installed
- MongoDB installed or a MongoDB Atlas account

### Backend Setup
1. Navigate to the backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Create a .env file with your MongoDB connection string:
   MONGO_URI=your_mongodb_connection_string
   PORT=8080
4. Start the server
   npm start
5. Backend API will run at: http://localhost:8080


### frontend Setup
1. Navigate to the frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start the development server:
   npm start
4. Frontend will run at: http://localhost:3000


Challenges Faced:-
1) Handling the JSON data was a bit messy at times because some fields were missing or inconsistent.
2) Making the job details update dynamically on click took a while to figure out in React.
3) Filtering jobs by location was tricky, especially with partial matches.
4) Deploying the frontend and backend and making them talk to each other was confusing at first.