import React from 'react';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export default function AddItemModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className="nav-link" onClick={handleShow}>
            Add Item
        </button>

      <Modal show={show} onHide={handleClose} fullscreen='sm-down' centered scrollable>
        <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div className="mb-3">
                    <Form.Label>Item Name:</Form.Label>
                    <Form.Control type="text" placeholder='Item' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Upload Images:</Form.Label>
                    <Form.Control type='file' accept='image/*' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as='textarea' rows={4} cols={50} placeholder='Description' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Link:</Form.Label>
                    <Form.Control type='text' placeholder='Enter Link' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Promo Code:</Form.Label>
                    <Form.Control type="text" placeholder='Enter Promo Code' required />
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Login
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}