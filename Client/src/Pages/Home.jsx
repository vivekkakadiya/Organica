import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/HomeComponent/Hero'
import { ListProduct } from '../Component/HomeComponent/ListProduct'
import { Footer } from '../Component/Footer'
import { ToastContainer} from 'react-toastify';




export const Home = () => {
  
  useEffect(() => { window.scrollTo(0, 0) 
  }
  , []);
  


  return (
    <>
  {/* 
    - #HEADER
  */}
  <Header />
  {/* 
    - #ASIDE
  */}
  {/* <aside className="aside">
    <div className="side-panel" data-side-panel="whishlist">
      <button
        className="panel-close-btn"
        aria-label="Close whishlist"
        data-panel-btn="whishlist"
      >
        <ion-icon name="close-outline" />
      </button>
      <ul className="panel-list">
        <li className="panel-item">
          <a href="./product-details.html" className="panel-card">
            <figure className="item-banner">
              <img
                src="./images/product-small-1.jpg"
                width={46}
                height={46}
                loading="lazy"
                alt="Bright Side Vegetarian"
              />
            </figure>
            <div>
              <p className="item-title">Bright Side Vegetarian</p>
              <span className="item-value">$20.15x1</span>
            </div>
            <button className="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline" />
            </button>
          </a>
        </li>
        <li className="panel-item">
          <a href="./product-details.html" className="panel-card">
            <figure className="item-banner">
              <img
                src="./images/product-small-2.jpg"
                width={46}
                height={46}
                loading="lazy"
                alt="Eco Vegetable"
              />
            </figure>
            <div>
              <p className="item-title">Eco Vegetable</p>
              <span className="item-value">$13.25x2</span>
            </div>
            <button className="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline" />
            </button>
          </a>
        </li>
        <li className="panel-item">
          <a href="./product-details.html" className="panel-card">
            <figure className="item-banner">
              <img
                src="./images/product-small-3.jpg"
                width={46}
                height={46}
                loading="lazy"
                alt="House of Veggies"
              />
            </figure>
            <div>
              <p className="item-title">House of Veggies</p>
              <span className="item-value">$20.15x1</span>
            </div>
            <button className="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline" />
            </button>
          </a>
        </li>
      </ul>
      <div className="subtotal">
        <p className="subtotal-text">Subtotal:</p>
        <data className="subtotal-value" value="215.14">
          $215.14
        </data>
      </div>
      <a href="./whishlist.html" className="panel-btn">
        View Whishlist
      </a>
    </div>
    <div className="side-panel" data-side-panel="cart">
      <button
        className="panel-close-btn"
        aria-label="Close cart"
        data-panel-btn="cart"
      >
        <ion-icon name="close-outline" />
      </button>
      <ul className="panel-list">
        <li className="panel-item">
          <a href="./product-details.html" className="panel-card">
            <figure className="item-banner">
              <img
                src="./images/product-small-1.jpg"
                width={46}
                height={46}
                loading="lazy"
                alt="Bright Side Vegetarian"
              />
            </figure>
            <div>
              <p className="item-title">Bright Side Vegetarian</p>
              <span className="item-value">$20.15x1</span>
            </div>
            <button className="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline" />
            </button>
          </a>
        </li>
        <li className="panel-item">
          <a href="./product-details.html" className="panel-card">
            <figure className="item-banner">
              <img
                src="./images/product-small-2.jpg"
                width={46}
                height={46}
                loading="lazy"
                alt="Eco Vegetable"
              />
            </figure>
            <div>
              <p className="item-title">Eco Vegetable</p>
              <span className="item-value">$13.25x2</span>
            </div>
            <button className="item-close-btn" aria-label="Remove item">
              <ion-icon name="close-outline" />
            </button>
          </a>
        </li>
      </ul>
      <div className="subtotal">
        <p className="subtotal-text">Subtotal:</p>
        <data className="subtotal-value" value="215.14">
          $215.14
        </data>
      </div>
      <a href="./cart.html" className="panel-btn">
        View Cart
      </a>
    </div>
  </aside> */}
  <main>
    <article>
      {/* 
  - #HERO
*/}
     <Hero/>
    
      {/* 
  - #PRODUCT
*/}
      <ListProduct/>
      
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
<Footer/>
  {/* 
    - #BACK TO TOP
  */}
  <a
    href="#top"
    className="back-to-top"
    aria-label="Back to Top"
    data-back-top-btn=""
  >
    {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevrons-up" /> */}
  <i className="fa-solid fa-chevrons-up"/>
  {/* <ion-icon name="arrow-up-outline" /> */}
  </a>
  {/* 
    - custom js link
  */}
  {/* 
    - ionicon link
  */}
      <ToastContainer />

</>

  )
}
