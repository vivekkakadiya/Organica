import React from "react";
import { ProductCard } from "../ShopComponent/ProductCard";

export const ListProduct = () => {
  const data = [
    {
      id: "P001",
      name: "Product 1",
      description: "This is the first product.",
      price: 19.99,
    },
    {
      id: "P002",
      name: "Product 2",
      description: "This is the second product.",
      price: 29.99,
    },
    {
      id: "P003",
      name: "Product 3",
      description: "This is the third product.",
      price: 39.99,
    },
  ];

  const handalClick = () => {
    console.log("fs");
  };
  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Organic Products --</p>
          <h2 className="h2 section-title">All Organic Products</h2>
          <ul className="filter-list">
            <li>
              <button className="filter-btn active">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fresh Vegetables</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-2.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-2-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Fish &amp; Meat</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-3.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-3-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Healthy Fruit</p>
              </button>
            </li>
            <li>
              <button className="filter-btn">
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">Dairy Products</p>
              </button>
            </li>
          </ul>
          <ul className="grid-list">
            {data.map((item) => 

               <ProductCard key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />
            
            
        
            )}
          </ul>
        </div>
      </section>
    </>
  );
};
