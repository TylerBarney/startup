import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import Store from './components/Store'
import LoginModal from './components/LoginModal';
import AddItemModal from './components/AddItemModal';
import { useState } from 'react';

export default function App() {
  
  let dummyItemList = [
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
    {
      itemName: 'Origami Swan',
      itemFullName: 'Master the Art of Origami - Detailed Instructions, High-Quality Paper, Ideal for Beginners and Experts Alike, Perfect for Creating Intricate Paper Creations, Gift Idea for Craft Lovers',
      itemImages: ['/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg','/origamiswan.jpeg'],
      itemPrice: 10,
      itemPromoCode: 'PROMOCODE',
      itemLink: 'link.link',
      itemDescription: 'This comprehensive origami book is designed to offer clear, step-by-step instructions, making it a versatile resource for both beginners and experienced paper folders. Its thoughtfully structured tutorials ensure a smooth learning curve, while the included high-quality, pre-cut paper allows for crisp and precise folds. Each project features detailed diagrams and tips, guiding you to create intricate and beautiful designs with ease. \n The book includes a wide range of models, from simple animals to complex geometric shapes, ensuring something for every skill level. The durable binding and quality pages withstand repeated use, while the eco-friendly materials ensure a sustainable crafting experience. Additionally, the book offers troubleshooting advice for common mistakes, helping users refine their technique for perfect results.',
      itemViews: 10
    },
  ]
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [itemList, setItemList] = useState([...dummyItemList])

  const handleAddItem = (item) => {
    setItemList(prevList => [...prevList, item]);  // Use spread operator to add item
    console.log(itemList);
  }

  return (
<BrowserRouter>
<header>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-brand">
              <img src="/ShopDepotLogo.png" height="30px"/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <AddItemModal handleAddItem={ handleAddItem }/>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    {!isLoggedIn && (
                        <LoginModal setIsLoggedIn={ () => setIsLoggedIn(true)}/>
                    )}
                    {isLoggedIn && (
                        <button className="nav-link" onClick={ () => setIsLoggedIn(false) }>
                          Logout
                        </button>
                    )}
                </li>
            </ul>
            </div>
        </div>
      </nav>
</header>

<Routes>
  <Route path='/' element={<Store itemList={itemList} />} exact />
  <Route path='*' element={<NotFound />} />
</Routes>

<footer>
    <hr />
    <div className="footer">
        <p>Tyler Barney</p>
        <a href="https://github.com/TylerBarney/startup">GitHub Repo</a>
    </div>
</footer>
</BrowserRouter>
  )
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}