import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/products/ProductList';
import Header from '../components/common/Header';

const ProductsPage = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <ProductList />
      </Container>
    </>
  );
};

export default ProductsPage;