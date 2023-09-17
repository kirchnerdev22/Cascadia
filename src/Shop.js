import React from 'react';

const ShopPage = () => {
  // Placeholder data for products (you can replace this with your actual product data)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      image: 'product3.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div className="shop-page">
      <h2>Shop</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-tile" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
