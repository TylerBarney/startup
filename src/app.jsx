import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app.css';
import Store from './components/Store'
import LoginModal from './components/LoginModal';
import AddItemModal from './components/AddItemModal';
import { useState, useEffect } from 'react';
import { viewWebsocket } from './viewWebsocket';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [itemList, setItemList] = useState([])
  const [token, setToken] = useState('')

  const handleViewEvent = async (event) => {
    console.log('handling view event')
    console.log(event)
    try {
      console.log(event.itemViews)
      if (event.itemId) {
        setItemList(prevList => 
          prevList.map(item => 
            item.itemId === event.itemId 
              ? {...item, itemViews: event.itemViews}
              : item
          )
        );
        console.log('itemList updated')
        console.log(itemList)
      }
    } catch (error) {
      console.error('Error parsing websocket message:', error);
    }
  };

  useEffect(() => {
    getItems()
    viewWebsocket.addHandler(handleViewEvent)
    return () => {
      viewWebsocket.removeHandler(handleViewEvent)
    }
  }, [])

  const handleAddItem = async (item) => {
      const formData = new FormData();

      // Append non-file fields
      formData.append('itemName', item.itemName);
      formData.append('itemFullName', item.itemFullName);
      formData.append('itemPrice', item.itemPrice);
      formData.append('itemPromoCode', item.itemPromoCode);
      formData.append('itemLink', item.itemLink);
      formData.append('itemDescription', item.itemDescription);
      formData.append('itemViews', item.itemViews);

      // Append each file from the FileList
      Array.from(item.itemImages).forEach((file) => {
          formData.append('itemImages', file);
      });

      // Make the POST request
      const response = await fetch('/api/items', {
          method: 'POST',
          body: formData,
      });

      if (response.ok) {
          console.log('Item added successfully');
          getItems(); // Refresh the items
      } else {
          console.error('Failed to add item');
      }
  };

  async function logIn(email, password) {
    const response = await fetch(`/api/auth/login`, {
      method: 'post',
      body: JSON.stringify( { email: email, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if (response?.status === 200){
      setToken(await response.json())
      return true
    }
    return false
  }

  async function createAccount(email, password) {
    const response = await fetch(`/api/auth/create`, {
      method: 'post',
      body: JSON.stringify( {email: email, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if (response?.status === 200){
      setToken(await response.json())
      return 'loggedIn'
    } else if (response?.status === 406){
      return 'badEmail'
    } else {
      return 'existingUser'
    }
  }

  async function logout(){
    fetch(`/api/auth/logout`, {
      method: 'delete',
      body: JSON.stringify( {token: token} ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    setToken('')
    setIsLoggedIn(false)
  }

  async function getItems() {
    const response = await fetch(`/api/items`, {
      method: 'get',
    })
    if (response?.status === 200){
      setItemList(await response.json())
    }
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
                  <AddItemModal handleAddItem={ handleAddItem } isLoggedIn={ isLoggedIn }/>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    {!isLoggedIn && (
                        <LoginModal login={ (email, password) => logIn(email, password)} create= { (email, password) => createAccount(email, password)} setLogin={setIsLoggedIn} />
                    )}
                    {isLoggedIn && (
                        <button className="nav-link" onClick={ () => logout() }>
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
