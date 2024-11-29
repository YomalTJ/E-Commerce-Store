import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Alert 
} from 'react-bootstrap';
import CartItem from '../components/cart/CartItem';
import Header from '../components/common/Header';
import { clearCart } from '../features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalQuantity } = useSelector(state => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    // Placeholder for checkout functionality
    alert('Checkout functionality to be implemented');
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="mb-4">Your Cart</h2>
        {totalQuantity === 0 ? (
          <Alert variant="info">
            Your cart is empty. Start shopping!
          </Alert>
        ) : (
          <>
            <Row>
              <Col md={8}>
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Col>
              <Col md={4}>
                <div className="border p-3 rounded">
                  <h4>Cart Summary</h4>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Total Items:</span>
                    <strong>{totalQuantity}</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Total Amount:</span>
                    <strong>${totalAmount.toFixed(2)}</strong>
                  </div>
                  <div className="d-grid gap-2">
                    <Button 
                      variant="primary" 
                      onClick={handleCheckout}
                      disabled={totalQuantity === 0}
                    >
                      Proceed to Checkout
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default CartPage;