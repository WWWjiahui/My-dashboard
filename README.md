# Dashboard Application (Next.js Frontend + Django Backend)

## Description

This project demonstrates a simple dashboard with three charts (Line, Bar, Pie) that fetch data from a Django API backend and display them using a Next.js frontend. The charts are dynamically populated based on the backend API responses and are responsive across different screen sizes.

## Project Structure

my-dashboard/ 

├── backend/ # Django API for serving chart data 

├── frontend/ # Next.js Frontend for displaying the dashboard

## How to Set Up and Run the Application

### Prerequisites

- **Backend**: Python 3.9.7, pip
- **Frontend**: Node.js 22.7 + and npm (or yarn)

### Step 1: Backend Setup (Django API)

1. Navigate to the `backend` directory:
   
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment
   
   ```bash
   python -m venv env
   source env/bin/activate 
   ```

3. Install dependencies

```bash
   pip install django djangorestframework django-cors-headers
```

4. Apply migrations to set up the database

```bash
   python manage.py migrate
```

5. Run the Django development server

```bash
python manage.py runserver
```

### Step 2: Frontend Setup (Next.js)

1. Navigate to the frontend directory:

```bash
   cd frontend
```

2. Install dependencies

```bash
   npm install
```

3. Run the Next.js development server

```bash
   npm run dev   
```

The frontend will run at http://localhost:3000.

### Libraries and Tools Used

#### Backend (Django)

Django: A Python-based web framework for the API backend.

Django REST Framework: For creating API endpoints.

CORS Headers: To handle cross-origin requests from the frontend.

#### Frontend (Next.js)

Next.js: A React-based framework for the frontend.

axios: For making HTTP requests to the backend API.

react-chartjs-2: A React wrapper for Chart.js for visualizing data.

#### Approach and Thought Process

  The approach was to create a well-organized and simple dashboard application, with a Django backend serving the chart data and a Next.js frontend displaying the charts. The Django REST API provides data for the charts in JSON format, which is consumed by the Next.js frontend using axios. Chart.js, wrapped with react-chartjs-2, is used to render the charts.

Key considerations:

Backend: Easy-to-extend Django API that provides the necessary chart data.

Frontend: Clean, responsive UI using Next.js and Chart.js.

Scalability: The project is structured to be scalable and maintainable, allowing future additions of new features or charts.

## Running Both Servers Simultaneously

To run both the Django backend and Next.js frontend at the same time, open two terminal windows:

1. In the first terminal, start the Django backend

```bash
cd backend
python manage.py runserver
```

2. In the second terminal, start the Next.js frontend

```bash
cd frontend
npm run dev
```

Visit http://localhost:3000 in your browser to access the application.
