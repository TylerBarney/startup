import React from 'react';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export default function LoginModal({setIsLoggedIn}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const password = e.target.formPassword.value;
    setIsLoggedIn()
    handleClose();
  };

  return (
    <>
        <button className="nav-link" onClick={handleShow}>
            <i className="bi bi-box-arrow-in-right spaced-login-icon"></i>
            Login
        </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="loginForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="formEmail" type="email" placeholder='name@example.com' required/>
                </div>
                <div className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="formPassword" type="password" placeholder='Password' required />
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" form="loginForm" type="submit">
                Create Account
            </Button>
            <Button variant="primary" form="loginForm" type="submit">
                Login
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}