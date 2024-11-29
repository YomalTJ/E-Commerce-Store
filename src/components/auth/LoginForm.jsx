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
import { loginValidationSchema } from '../../utils/validation';
import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      dispatch(loginStart());
  
      const storedUser = JSON.parse(localStorage.getItem('persist:auth'))?.user
        ? JSON.parse(JSON.parse(localStorage.getItem('persist:auth')).user)
        : null;
  
      if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
        dispatch(loginSuccess(storedUser));
        navigate('/products');
      } else {
        dispatch(loginFailure('Invalid email or password'));
      }
      setSubmitting(false);
    } catch (err) {
      dispatch(loginFailure(err.message));
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form as={BootstrapForm}>
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

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100" 
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </Button>

                <div className="text-center mt-3">
                  <p>
                    Don't have an account? 
                    <Button 
                      variant="link" 
                      onClick={() => navigate('/register')}
                    >
                      Register
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

export default LoginForm;