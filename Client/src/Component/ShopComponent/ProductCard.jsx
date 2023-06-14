import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const navigate = useNavigate();
  const handalClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handalCart = async () => {
    if(sessionStorage.getItem("token")===null){
      navigate("/login");
    }
    const res = await fetch("http://localhost:9090/cart/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      },
      body: JSON.stringify({

        productId: props.id,
        quantity: 1,
      }),
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <li>
        <div className="product-card">
          <figure className="card-banner">
            <img
              // src="./images/product-1.png"
              src={`data:image/png;base64,${props.img}`}
              // src={base64Image}

              width={189}
              height={189}
              loading="lazy"
              alt="Fresh Orangey"
            />
            <div className="btn-wrapper">
              <button className="product-btn" aria-label="Add to Whishlist">
                <ion-icon name="heart-outline" />
                <div className="tooltip">Add to Whishlist</div>
              </button>
              <button
                className="product-btn"
                onClick={() => handalClick(props.id)}
                aria-label="Quick View"
              >
                <ion-icon name="eye-outline" />
                <div className="tooltip">Quick View</div>
              </button>
            </div>
          </figure>
          <div className="rating-wrapper">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
          </div>
          <h3 className="h4 card-title">
            <a href="/product/1">{props.name}</a>
          </h3>
          <div className="price-wrapper">
            <del className="del">$75.00</del>
            <data className="price" value={85.0}>
              {props.price}
            </data>
          </div>
          <button className="btn btn-primary" onClick={() => handalCart()}>
            Add to Cart
          </button>
        </div>
      </li>
    </>
  );
};
