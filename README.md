# DevLogs - A Blog for Developers

The backend is completely build on Django using Django Rest Framework, while the frontend is built using bootstrap

## Backend Setup
1. Clone this repository: `git clone https://github.com/dojutsu-user/Django-React-Blog.git`.
2. Change the current directory to `backend` folder: `cd ./Django-React-Blog/backend/`.
3. Create a virutal environment and install all backend dependencies with pipenv: `pipenv install`.
4. Start the virtual environment: `pipenv shell`.
5. Change the working directory to `blog_backend` which contains the `manage.py` file: `cd ./blog_backend`.
6. Run `python manage.py makemigrations`.
7. Run `python manage.py migrate`.
8. Create a superuser: `python manage.py createsuperuser`
9. Run the server: `python manage.py runserver`.

## Backend API Documentation
API Documentation is generated using the default tool provided by Django Rest Framework.

### View The API documentation
1. Make sure that the Backend Server is running.
2. Navigate to the [localhost:8000/docs/](localhost:8000/docs/)
