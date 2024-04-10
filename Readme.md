# E-Learning Platform Backend

Welcome to the backend repository for our e-learning platform! This backend API provides endpoints for user registration, user profile management, course management, user enrollment, and more.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running on your local machine
- Access to a mailing service like [resend.com](https://resend.com) for email communication

### Installation

1. Clone this repository to your local machine:

git clone https://github.com/simran1002/E-Learning-Management-System.git

2. Navigate to the project directory:

cd e-learning-backend

3. Install dependencies using npm:

npm install

### Configuration

1. Set up your local MongoDB database:

   - Start MongoDB service on your machine.

2. Set up environment variables:

   - Create a `.env` file in the project root.
   - Add the following environment variables to the `.env` file:

     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/e_learning
     ```

     Replace `mongodb://localhost:27017/e_learning` with your actual MongoDB connection URI.

### Running the Server

1. Start the server:

npm start

### Testing Endpoints

You can test the provided endpoints using the following routes:

- User Registration: `POST /api/users/register`
- User Profile Management: `GET /api/users/:userId`, `PUT /api/users/:userId`
- Course Management: `GET /api/courses`, `POST /api/courses`, `GET /api/courses/:courseId`, `PUT /api/courses/:courseId`, `DELETE /api/courses/:courseId`
- User Enrollment: `POST /api/courses/:courseId/enroll`, `GET /api/users/:userId/courses/enrolled`
- Filtering and Pagination: `GET /api/courses?category=categoryValue&level=levelValue&page=pageNumber&limit=pageSize`
- Email Integration: Not applicable for direct testing, involves email communication