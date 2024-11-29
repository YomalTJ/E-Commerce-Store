import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Form as BootstrapForm, 
  Button, 
  Alert 
} from 'react-bootstrap';
import { registerValidationSchema } from '../../utils/validation';
import { registerStart, registerSuccess, registerFailure } from '../../features/auth/authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      dispatch(registerStart());
      if (values.email && values.password) {
        const mockUser = {
          id: Date.now(),
          name: values.name,
          email: values.email,
          password: values.password
        };
        dispatch(registerSuccess(mockUser));
        navigate('/products');
      } else {
        dispatch(registerFailure('Registration failed'));
      }
      setSubmitting(false);
    } catch (err) {
      dispatch(registerFailure(err.message));
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Register</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Formik
            initialValues={{ 
              name: '', 
              email: '', 
              password: '', 
              confirmPassword: '' 
            }}
            validationSchema={registerValidationSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched }) => (
              <Form as={BootstrapForm}>
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Name</BootstrapForm.Label>
                  <Field
                    name="name"
                    type="text"
                    as={BootstrapForm.Control}
                    placeholder="Enter your name"
                    isInvalid={touched.name && errors.name}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.name}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field
                    name="email"
                    type="email"
                    as={BootstrapForm.Control}
                    placeholder="Enter email"
                    isInvalid={touched.email && errors.email}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.email}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <Field
                    name="password"
                    type="password"
                    as={BootstrapForm.Control}
                    placeholder="Password"
                    isInvalid={touched.password && errors.password}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.password}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    as={BootstrapForm.Control}
                    placeholder="Confirm Password"
                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register'}
                </Button>

                <div className="text-center mt-3">
                  <p>
                    Already have an account? 
                    <Button 
                      variant="link" 
                      onClick={() => navigate('/login')}
                    >
                      Login
                    </Button>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;