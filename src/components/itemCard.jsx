import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app.css';
import { useState } from 'react';
import {Button, Modal, Form, Row, Col, Carousel} from 'react-bootstrap';

export default function ItemCard({ item }) {
    
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <i className="bi bi-eye spaced-icon"></i>
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
                                    {/* <div id="carouselIndicators" className="carousel slide" data-bs-ride="false" data-bs-interval="false">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className='active'></button>
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            {item.itemImages.map(imgsrc => (
                                                <div className="carousel-item active">
                                                <img src={imgsrc} className="d-block w-100" />
                                                </div>
                                            ))}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div> */}
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
                                    <label for="views">Views:</label>
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