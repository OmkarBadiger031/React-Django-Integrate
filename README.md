# Student Management System (React + Django)

A full-stack Student Management System built using React for the frontend and Django for the backend.

## Prerequisites

Install the following before running the project:

* Python
* Node.js and npm
* Git (if cloning the repository)

## ⚛️ Run the Frontend (React)

Open a terminal in the `React-Django-Integrate` project folder.

**Step 1: Navigate to the React folder**

```cmd
cd Frontend\student_enrollment_react-main
```

**Step 2: Install the required dependencies**

```cmd
npm install
```

**Step 3: Start the React application**

```cmd
npm run dev
```

Open the frontend at the URL displayed in the terminal, usually:

http://localhost:5173/

Keep this terminal running.

## 🐍 Run the Django Backend

Open a **second terminal** in the `React-Django-Integrate` project folder.

**Step 1: Create a virtual environment** *(first time only)*

```cmd
python -m venv test
```

**Step 2: Activate the virtual environment**

```cmd
test\Scripts\activate
```

**Step 3: Install the required packages**

```cmd
pip install -r Backend\student_management\requirements.txt
```

**Step 4: Navigate to the Django project**

```cmd
cd Backend\student_management
```

**Step 5: Apply database migrations**

```cmd
python manage.py migrate
```

**Step 6: Start the Django server**

```cmd
python manage.py runserver
```

The backend will usually run at:

http://127.0.0.1:8000/

Keep this terminal running.

## 🌐 Access the Application

Once both servers are running:

* **Frontend:** http://localhost:5173/
* **Backend:** http://127.0.0.1:8000/

## Important Notes

* Run the frontend and backend in two separate terminals.
* Run `npm install` when setting up the frontend for the first time.
* Create and activate the Python virtual environment on the first setup.
* Run database migrations before starting Django.
* If the project uses MySQL, configure MySQL and create the required database before running the backend.
* Never upload your virtual environment, `node_modules`, database passwords, or secret keys to GitHub.
