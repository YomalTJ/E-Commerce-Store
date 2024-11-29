import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  InputGroup,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { setSearchTerm, filterByCategory } from '../../features/products/productSlice';
import { addToCart } from '../../features/cart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredItems, searchTerm, selectedCategory } = useSelector(state => state.products);
  const [search, setSearch] = useState(searchTerm);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const categories = [
    'All', 
    ...new Set(useSelector(state => state.products.items.map(product => product.category)))
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(setSearchTerm(value));
  };

  const handleCategoryChange = (e) => {
    dispatch(filterByCategory(e.target.value));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setToastMessage(`${product.name} added to cart`);
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Select onChange={handleCategoryChange} value={selectedCategory}>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
        {filteredItems.map(product => (
          <Col key={product.id}>
            <ProductCard 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          </Col>
        ))}
      </Row>
      {filteredItems.length === 0 && (
        <div className="text-center mt-4">
          <h4>No products found</h4>
        </div>
      )}

      <ToastContainer position="top-end" className="p-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default ProductList;