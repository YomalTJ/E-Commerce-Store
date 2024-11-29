import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.name}
        className="img-fluid"
        style={{ 
          height: '250px', 
          objectFit: 'cover' 
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted">
          {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Card.Text className="h5 mb-0">
            ${product.price.toFixed(2)}
          </Card.Text>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;