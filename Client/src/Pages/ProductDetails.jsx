import React, { useEffect } from 'react'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'

export const ProductDetails = () => {
  
  useEffect(() => { window.scrollTo(0, 0) }, []);
  
  return (
    <>
    
    <>
<Header/>
  <div className="pd-wrap">
    <div className="container">
      {/* <div className="heading-section">
        <h2>Product Details</h2>
      </div> */}
      <div className="row">
        <div className="col-md-6">
          <div id="slider" className="owl-carousel product-slider">
           <div className="item">
              <img src="./images/product-2.png" />
            </div>
          </div>
          <div id="thumb" className="owl-carousel product-thumb">
            <div className="item">
              <img src="./images/product-2.png" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">Variable Product</div>
              <div className="reviews-counter">
                <div className="rate">
                  <input
                    type="radio"
                    id="star5"
                    name="rate"
                    defaultValue={5}
                    defaultChecked=""
                  />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input
                    type="radio"
                    id="star4"
                    name="rate"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input
                    type="radio"
                    id="star3"
                    name="rate"
                    defaultValue={3}
                    defaultChecked=""
                  />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
                <span>3 Reviews</span>
              </div>
              <div className="product-price-discount">
                <span>$39.00</span>
                <span className="line-through">$29.00</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="row">
              {/* <div className="col-md-6">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" className="form-control">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div> */}
              {/* <div className="col-md-6">
                <label htmlFor="color">Color</label>
                <select id="color" name="color" className="form-control">
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
              </div> */}
            </div>
            <div className="product-count">
              <label htmlFor="size">Quantity</label>
              <form action="#" className="display-flex">
                <div className="qtyminus">-</div>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={1}
                  className="qty"
                />
                <div className="qtyplus">+</div>
              </form>
              <a href="#" className="round-black-btn">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <Footer/>
</>



    </>
  )
}
