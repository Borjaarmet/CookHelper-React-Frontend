import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/bacon-n-eggs-404.jpg'


const NotFound = () => {
  return (
    <div className="container-notFound">
      <div className="title-notFound">
      <h1>Ooops!, the page you are looking for is not on the menu</h1>
      </div>
            <div className="link-notFound">
      <Link to= "/app">
        <button className="btn-notFound">GO BACK</button>
      </Link>
      </div>
      <div >
        <img className="image-notFound" src={image}></img>
      </div>
    </div>
  )
}

export default NotFound
