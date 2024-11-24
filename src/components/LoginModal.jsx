import React from 'react';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export default function LoginModal({login, create, setLogin}) {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(null)
  const [showUserTaken, setShowUserTaken] = useState(false)
  const [showBadCredentials, setShowBadCredentials] = useState(false)
  const [showDisposable, setShowDisposable] = useState(false)

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.formEmail.value;
    const password = e.target.formPassword.value;
    if (button === 'login'){
      login(email, password)
      .then((isLoggedIn) => {
        if (!isLoggedIn){
          setShowBadCredentials(true)
          setShowUserTaken(false)
          setShowDisposable(false)
        } else {
          setLogin(true)
          localStorage.setItem('loggedIn', true)
          handleClose();
        }
      })
    } else {
      create(email, password)
      .then((isLoggedIn) => {
        if (isLoggedIn === 'existingUser'){
          setShowBadCredentials(false)
          setShowUserTaken(true)
          setShowDisposable(false)
        } else if (isLoggedIn === 'badEmail') {
          setShowBadCredentials(false)
          setShowUserTaken(false)
          setShowDisposable(true)
        } else {
          setLogin(true)
          localStorage.setItem('loggedIn', true)
          handleClose()
        }
      })
    }
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
                {
                  showBadCredentials && <p style={{ color: 'red' }}>Bad Login</p>
                }

                {
                  showUserTaken && <p style={{ color: 'red' }}>User Taken</p>
                }

                {
                  showDisposable && <p style={{ color: 'red' }}>This email is associated with disposable emails. Please use a different one</p>
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" form="loginForm" type="submit" onClick={() => setButton('create')}>
                Create Account
            </Button>
            <Button variant="primary" form="loginForm" type="submit" onClick={() => setButton('login')}>
                Login
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}