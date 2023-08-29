# Product Management Application

This is a Product Management Application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows you to perform CRUD operations (Create, Read, Update, Delete) for managing products.

## Installation

### Backend (API)

1. Navigate to the `backend` folder:
   ```
   cd backend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and set the following environment variables:
   ```
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   ```

4. Start the backend server:
   ```
   npm start
   ```

   The API will run on `http://localhost:5000`.

### Frontend (React App)

1. Navigate to the `client` folder:
   ```
   cd client
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```

   The React app will run on `http://localhost:3000`.

## API Routes

- `GET /api/products`: Get a list of all products.
- `GET /api/products/:id`: Get details of a specific product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update details of a specific product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

## JSON Examples

### POST /api/products

Request:
```json
{
  "title": "Sample Product",
  "description": "This is a sample product description.",
  "price": 99.99,
  "imageUrl": "https://example.com/sample.jpg"
}
```

Response:
```json
{
  "_id": "product_id",
  "title": "Sample Product",
  "description": "This is a sample product description.",
  "price": 99.99,
  "imageUrl": "https://example.com/sample.jpg"
}
```

### GET /api/products/:id

Response:
```json
{
  "_id": "product_id",
  "title": "Sample Product",
  "description": "This is a sample product description.",
  "price": 99.99,
  "imageUrl": "https://example.com/sample.jpg"
}
```

## Testing API Endpoints

You can use tools like [Postman](https://www.postman.com/) to test the API endpoints. Use the provided JSON examples above for testing the `POST` and `GET` requests.

---

Make sure to replace `<your_mongodb_uri>` with the actual MongoDB URI you're using.