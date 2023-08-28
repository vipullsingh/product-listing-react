// import React from 'react';
// import '../styles/ProductCard.css';

// function ProductCard({ product, onEdit, onDelete }) {
//   return (
//     <div className="product-card">
//       <div className="product-details">
//         <h3>{product.title}</h3>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//       </div>
//       <div className="product-actions">
//         <button onClick={() => onEdit(product)}>Edit</button>
//         <button onClick={() => onDelete(product._id)}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

// import React from 'react';
// import '../styles/ProductCard.css';

// function ProductCard({ product, onEdit, onDelete }) {
//   return (
//     <div className="product-card">
//       <div className="product-details">
//         <h3>{product.title}</h3>
//       <div className="product-image">
//         <img src={product.imageUrl} alt={product.title} />
//       </div>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//       </div>
//       <div className="product-actions">
//         <button onClick={() => onEdit(product)}>Edit</button>
//         <button onClick={() => onDelete(product._id)}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
      <div className="product-actions">
        <button onClick={() => onEdit(product)}>Edit</button>
        <button onClick={() => onDelete(product._id)}>Delete</button>
        <Link to={`/product/${product._id}`}>View Details</Link> {/* Add this link */}
      </div>
    </div>
  );
}

export default ProductCard;
