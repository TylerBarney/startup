import React from 'react';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export function ViewItemModal(item, show, handleClose) {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{item.itemName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form id="loginForm">
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
        </Modal.Footer>
      </Modal>
    </>
  );
}