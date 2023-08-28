
// import React, { useState, useEffect } from 'react';
// import ProductList from '../components/ProductList';
// import AddEditProduct from '../components/AddEditProduct'; // Import the AddEditProduct component
// import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../services/api'; // Import your CRUD functions
// import '../styles/HomePage.css';


// function HomePage() {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const productsData = await getAllProducts();
//       setProducts(productsData);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <div className="home-page">
//       <h1>Product Management</h1>
//       <ProductList products={products} />

//     </div>
//   );
// }

// export default HomePage;


import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import AddEditProduct from '../components/AddEditProduct'; // Import the AddEditProduct component
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../services/api'; // Import your CRUD functions
import '../styles/HomePage.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = async (productData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, productData);
        setEditingProduct(null);
      } else {
        await createProduct(productData);
      }
      fetchProducts();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Product Management</h1>
      <AddEditProduct product={editingProduct} onSave={handleSave} onCancel={handleCancel} />
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
