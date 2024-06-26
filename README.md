This is a simple Ticket CRUD (Create, Read, Update, Delete) API built using Express.js, PostgreSQL with Prisma ORM, and JWT for authentication. 
Link for this project : https://github.com/pankop/Ticket-CRUD-API.git
## Tech Stack
- **Backend Framework** : Express JS
- **Database** : PostgreSQL
- **ORM** : Prisma

## Setup Project
1. **Clone the repository:**
	```bash
	git clone https://github.com/yourusername/Ticket-CRUD-API.git 
	cd ticket-crud-api
	```
1. **Install dependencies:**
	```bash
	npm install
	```
1. **Setup Database:**
	Create a new PostgreSQL database and user. You can use the following commands in PostgreSQL shell or your preferred PostgreSQL management tool.
	```sql
	CREATE DATABASE ticketdb;
	CREATE USER ticketuser WITH ENCRYPTED PASSWORD 'password';
	GRANT ALL PRIVILEGES ON DATABASE ticketdb TO ticketuser;
	```
1. **Setup Prisma:**
	Generate Prisma client by running:
	```bash
	npx prisma generate
	```
5. **Configure environment variables:** 
	Create a `.env` file in the root of your project and add the following content:
	```plaintext
	DATABASE_URL="postgresql://ticketuser:password@localhost:5432/ticketdb? schema=public"
	JWT_SECRET="your_jwt_secret_key
	```
### Authentication
1. **Register**
	- **Method:** `POST`
	- **Endpoint:** `/api/auth/register`
	- **Request Body:**
		```JSon
		  { 
		    "username": "abc23@email.com", 
		    "password": "abc123"
		  }
		```
	- **Response:**
		 ```JSON
		 {
		  "token": "jwt_token"
		 }
		```
1. **Login**
	- **Method:** `POST`
	- **Endpoint:** `/api/auth/login`
	- **Request Body:**
		```JSon
		  { 
		    "username": "abc23@email.com", 
		    "password": "abc123"
		  }
		```
	 - **Response:**
		```JSon
		  { 
		    "username": "abc23@email.com", 
		    "password": "abc123"
		  }
		```
### Tickets
1. **Create a ticket**
	- **Method**: `POST`
	- **Endpoint**: `/api/tickets`
	- **Headers:** `Authorization: Bearer <jwt_token>`
	- **Request Body**:
		```JSON
		{
		  "title": "Sample Ticket",
		  "description": "This is a sample ticket"
		}
		```
	- **Response**:
		```JSON
		{
		  "id": 1,
		  "title": "Sample Ticket",
		  "description": "This is a sample ticket",
		  "status": "open",
		  "userId": "1"
		}		
		```
1. **Get All Tickets**
	- **Method**: `GET`
	- **Endpoint**: `/api/tickets`
	- **Headers:** `Authorization: Bearer <jwt_token>`
	- **Response**:
		```JSON
		[
		  {
		    "id": 1,
		    "title": "Sample Ticket",
		    "description": "This is a sample ticket",
		    "status": "open",
			"userId": "1"
		  }
		]
	
		```
1. **Get Tickets by ID**
	- **Method**: `GET`
	- **Endpoint**: `/api/tickets/:id`
	- **Headers:** `Authorization: Bearer <jwt_token>`
	- **Response:**
		```JSON
		{
		  "id": 1,
		  "title": "Sample Ticket",
		  "description": "This is a sample ticket",
		  "status": "open",
		  "userId": "1"
		}
		```
1. **Update Ticket**
   - **Method:** `PUT`
   - **Endpoint:** `api/tickets/:id`
   - **Headers:** `Authorization: Bearer <jwt_token>`
   - **Request Body:**
	  ```JSON
	  {
	   "title": "Sample Ticket_1",
	   "description": "This is a sample ticket_1"
	  }
		```
   - **Response:**
	   ```JSON
		{
		  "id": 1,
		  "title": "Sample Ticket_1",
		  "description": "This is a sample ticket_1",
		  "status": "open",
		  "userId": "1"
		}
		```
1. **Delete Ticket**
	- **Method:** `DELETE`
	- **Endpoint:** `/api/tickets/:id`
	- **Headers:** `Authorization: Bearer <jwt_token>`
	- **Response:**
		```JSON
		{
		 "msg": "Ticket removed" 
		}
		```
