import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app.css';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col, Carousel} from 'react-bootstrap';
import { viewWebsocket } from '../viewWebsocket';

export default function ItemCard({ item, socket }) {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        viewWebsocket.send(item.itemId, item.itemViews);
    };
    return (
    <>
        <div className="card" onClick={handleShow}>
            <img src={item.itemImages[0]} className="card-img-top" alt="item image" />
            <div className="card-body">
                <h5 className="card-title">{item.itemName}</h5>
                <div className="card-text">
                    <div id="card-price">${item.itemPrice}</div>
                    <div id="card-views">
                        {item.itemViews}
                        <i className="bi bi-eye spaced-eye-icon"></i>
                    </div> 
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} centered size="xl" scrollable="true">
        <Modal.Header closeButton>
            <Modal.Title>{item.itemName}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 display-flex flex-direction-row justify-content-center align-items-center mb-3">
                            <div className="my-carousel">
                                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                                    {item.itemImages.map(imgsrc => (
                                        <Carousel.Item>
                                            <img src={imgsrc} className="d-block w-100 carousel-img" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            
                        </div>
                        <div className="col-lg-8 display-flex flex-direction-column">
                            <h4 className="mb-3">{item.itemFullName}</h4>
                            <p className="mb-3">
                                {item.itemDescription}
                            </p>
                            
                            <div id="links" className="mb-1">
                                <label>Links:</label>
                                <a href={item.itemLink}>{item.itemLink}</a>
                            </div>
                            
                            <div id="promo-code-div" className="mb-3">
                                <label>Promo Code:</label>
                                <span id="promoCode">{item.itemPromoCode}</span>
                            </div>
                
                            <div id="views" className="view-className">
                                <label>Views:</label>
                                <span id="views">{item.itemViews}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
    )
}