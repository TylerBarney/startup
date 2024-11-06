import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import ItemCard from './components/itemCard';
import { Button } from 'bootstrap';
import LoginModal from './components/LoginModal';
import AddItemModal from './components/AddItemModal';

export default function App() {
  return (
<>
<header>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
            <img src="/ShopDepotLogo.png" height="30px"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <AddItemModal />
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <LoginModal />
                </li>
            </ul>
            </div>
        </div>
      </nav>
</header>

<main>
    <div className="items-display">
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
      <ItemCard imgSrc='/origamiswan.jpeg' itemName={'Origami Swan'} itemPrice={10} itemViews={10} />
    </div>

    <div className="modal fade" id="addItemModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addItemModalLabel">Add Item</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label for="item-name-textbox" className="form-label">Item Name:</label>
                            <input id="item-name-textbox" className="form-control"type="text" placeholder="Item" required />
                        </div>
                        <div className="mb-3">
                            <label for="img-upload" className="form-label">Upload Images:</label>
                            <input id="img-upload" className="form-control" type="file" name="img" accept="image/*" required="true" />
                        </div>
                        <div className="mb-3">
                            <label for="item-description" className="form-label">Description:</label>
                            <textarea id="item-description" className="form-control" name="item-description" rows="4" cols="50" placeholder="Description" required="true" />
                        </div>
                        <div className="mb-3">
                            <label for="item-link" className="form-label">Link:</label>
                            <input id="item-link"className="form-control"  type="text" placeholder="Enter Link" required="true" />
                        </div>
                        <div className="mb-3">
                            <label for="promo-code" className="form-label">Promo Code:</label>
                            <input id="promo-code" className="form-control" type="text" placeholder="Enter Promo Code" required="true" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="itemDetailsModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="itemDetailsModalLabel">Item Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 display-flex flex-direction-row justify-content-center align-items-center mb-3">
                                <div className="my-carousel">
                                    <div id="carouselIndicators" className="carousel slide" data-bs-ride="false" data-bs-interval="false">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active"></button>
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"></button>
                                            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                            <img src="/origamiswan.jpeg" className="d-block w-100" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="/origamiswan.jpeg" className="d-block w-100" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src="/origamiswan.jpeg" className="d-block w-100" />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-8 display-flex flex-direction-column">
                                <h4 className="mb-3">Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers</h4>
                                <p className="mb-3">
                                    This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease.
                                    <br />
                                    The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.
                                </p>
                                
                                <div id="links" className="mb-1">
                                    <label>Links:</label>
                                    <a href="https://amazon.com">Amazon</a>
                                </div>
                                
                                <div id="promo-code-div" className="mb-3">
                                    <label>Promo Code:</label>
                                    <span id="promoCode">THISISAPROMOCODE</span>
                                </div>
                    
                                <div id="views" className="view-className">
                                    <label for="views">Views:</label>
                                    <span id="views">30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<footer>
    <hr />
    <div className="footer">
        <p>Tyler Barney</p>
        <a href="https://github.com/TylerBarney/startup">GitHub Repo</a>
    </div>
</footer>
    </>
  )
}