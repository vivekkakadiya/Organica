import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export const ProductCard = (props) => {
  const navigate = useNavigate();

  const[token,setToken]=useState(sessionStorage.getItem("token"));

  const onToast = () => {
    toast.success('Added to cart!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
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
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({

        productId: props.id,
        quantity: 1,
      }),
    });
    if(res.status===200){
      onToast();
      const data = await res.json();
    }else{
      navigate("/login");
    }
    
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
            <del className="del">Rs {props.price+100}</del>
            <data className="price" value={85.0}>
              Rs {props.price}
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
