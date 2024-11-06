import React from 'react';
import { useState, useEffect } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export default function LoginModal() {
  const [show, setShow] = useState(false);
  const [isMobile, setMobile] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className="nav-link" onClick={handleShow}>
            <i className="bi bi-box-arrow-in-right"></i>
            Login
        </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder='name@example.com' required/>
                </div>
                <div className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='Password' required />
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Create Account
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}