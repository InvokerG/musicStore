# NEIU Music Store

A full-stack music store web application that allows customers to browse musical instruments and administrators to manage product inventory.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Python, Django
- API: Django REST Framework
- Database: SQLite
- Testing: Vitest
- Version Control: Git and GitHub

## Features

- Dynamic product display through REST API
- Product categorization: New Arrivals, Used, and Deals
- Django administration panel
- Product image uploads
- Inventory and price management
- Automated unit testing

## Installation

Clone the repository:

`git clone https://github.com/InvokerG/musicStore.git`

`cd musicStore/backend`

Create and activate a virtual environment:

`python3 -m venv .venv`

`source .venv/bin/activate`

Install Python dependencies:

`pip install -r requirements.txt`

Initialize the database:

`python manage.py migrate`

Create an administrator account:

`python manage.py createsuperuser`

Start the backend:

`python manage.py runserver`

## Application Access

- REST API: http://127.0.0.1:8000/items/
- Admin panel: http://127.0.0.1:8000/admin/

Add products through the Django administration panel.

Open `index.html` using VS Code Live Server while the Django backend is running. Ensure the frontend origin is allowed by the Django CORS configuration.

## Unit Testing

From the project root, run:

`npm ci`

`npm test`

### Test Results

| Test | Result |
|------|--------|
| New product category       | Passed |
| Used product category      | Passed |
| Uppercase product category | Passed |

All three unit tests passed successfully.
