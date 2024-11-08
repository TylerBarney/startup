import React from 'react';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export default function AddItemModal({handleAddItem}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemName = e.target.formItemName.value
    const itemImages = Array.from(e.target.formItemImage.files).map(file => URL.createObjectURL(file))
    const itemDescription = e.target.formItemDescription.value
    const itemPrice = parseFloat(e.target.formItemPrice.value)
    const itemLink = e.target.formItemLink.value
    const itemPromoCode = e.target.formPromoCode.value
    const itemViews = 0
    handleAddItem({
        itemName,
        itemImages,
        itemPrice,
        itemPromoCode,
        itemLink,
        itemDescription,
        itemViews
    })
    handleClose()
  };

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
            <Form id="formAddItem" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Label>Item Name:</Form.Label>
                    <Form.Control id="formItemName" type="text" placeholder='Item' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Upload Images:</Form.Label>
                    <Form.Control id="formItemImage" type='file' accept='image/*' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control id="formItemDescription" as='textarea' rows={4} cols={50} placeholder='Description' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control id="formItemPrice" type='number' placeholder='0' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Link:</Form.Label>
                    <Form.Control id="formItemLink" type='text' placeholder='Enter Link' required />
                </div>
                <div className="mb-3">
                    <Form.Label>Promo Code:</Form.Label>
                    <Form.Control id="formPromoCode" type="text" placeholder='Enter Promo Code' required />
                </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" form="formAddItem" type="submit">
                Create
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}