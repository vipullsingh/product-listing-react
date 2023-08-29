
# Product Listing React App

Welcome to the Product Listing React App! This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This application allows you to manage and display a list of products with CRUD (Create, Read, Update, Delete) functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Example Requests with Postman](#example-requests-with-postman)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/vipullsingh/product-listing-react.git
   ```

2. **Navigate to Client and Backend Folders:**

   ```bash
   cd product-listing-react/client
   npm install

   cd ../backend
   npm install
   ```
3. **Create a Dotenv file (.env) and Paste below code into it:**

    ```
    PORT = 5000
    MONGODB_URL = <place_your_MongoDB_URL>
    ```

   This will install the required dependencies for both the frontend and backend.

## Usage

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on http://localhost:5000.

2. **Start the React App:**

   ```bash
   cd client
   npm start
   ```

   The React app will run on http://localhost:3000.

3. **Access the App:**

   Open your web browser and navigate to http://localhost:3000 to interact with the React app.

## API Routes

The following API routes are available:

- **GET /api/products**: Fetch all products.
- **GET /api/products/:id**: Fetch a single product by its ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by its ID.
- **DELETE /api/products/:id**: Delete a product by its ID.

## Example Requests with Postman

1. **Fetch All Products**:
   - Method: GET
   - URL: http://localhost:5000/api/products

2. **Fetch a Single Product by ID**:
   - Method: GET
   - URL: http://localhost:5000/api/products/:id (Replace `:id` with an actual product ID)

3. **Create a New Product**:
   - Method: POST
   - URL: http://localhost:5000/api/products
   - Body: JSON data with `title`, `description`, `price`, and `imageUrl`.

4. **Update a Product by ID**:
   - Method: PUT
   - URL: http://localhost:5000/api/products/:id (Replace `:id` with an actual product ID)
   - Body: JSON data with updated `title`, `description`, `price`, and `imageUrl`.

5. **Delete a Product by ID**:
   - Method: DELETE
   - URL: http://localhost:5000/api/products/:id (Replace `:id` with an actual product ID)

## Folder Structure

The project is organized into two main folders:

- **client**: Contains the React frontend code.
- **backend**: Contains the Node.js and Express.js backend code.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB
- HTTP Library: Axios
- Routing: React Router
- Styling: CSS

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.
