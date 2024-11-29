import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { 
  addToCart, 
  removeFromCart 
} from '../../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Row className="align-items-center mb-3 border-bottom pb-2">
      <Col xs={3}>
        <img 
          src={item.image} 
          alt={item.name} 
          className="img-fluid rounded" 
          style={{ maxHeight: '100px', objectFit: 'cover' }} 
        />
      </Col>
      <Col xs={5}>
        <h6 className="mb-1">{item.name}</h6>
        <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
      </Col>
      <Col xs={4} className="d-flex align-items-center justify-content-end">
        <Button 
          variant="outline-secondary" 
          size="sm" 
          onClick={handleDecreaseQuantity}
        >
          -
        </Button>
        <span className="mx-2">{item.quantity}</span>
        <Button 
          variant="outline-secondary" 
          size="sm" 
          onClick={handleIncreaseQuantity}
        >
          +
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;