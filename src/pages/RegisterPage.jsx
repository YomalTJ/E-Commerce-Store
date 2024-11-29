import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { Container } from 'react-bootstrap';

const RegisterPage = () => {
  return (
    <Container fluid className="p-0">
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <RegisterForm />
      </div>
    </Container>
  );
};

export default RegisterPage;