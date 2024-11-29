import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container fluid className="p-0">
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;