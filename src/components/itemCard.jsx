import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../app.css';

export default function ItemCard({ imgSrc, itemName, itemPrice, itemViews }) {
    return (
        <div className="card">
            <img src={imgSrc} className="card-img-top" alt="item image" />
            <div className="card-body">
                <h5 className="card-title">{itemName}</h5>
                <div className="card-text">
                    <div id="card-price">${itemPrice}</div>
                    <div id="card-views">
                        {itemViews}
                        <i className="bi bi-eye spaced-icon"></i>
                    </div> 
                </div>
            </div>
        </div>
    )
  }