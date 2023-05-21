import React from 'react'

export const TopProduct = () => {
  return (
    <>
     <section className="section top-product">
        <div className="container">
          <p className="section-subtitle"> -- Organic Food --</p>
          <h2 className="h2 section-title">Trendy Products</h2>
          <ul className="top-product-list grid-list">
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-1.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Fresh Orangey"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Fresh Orangey</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-2.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="key Lime"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">key Lime</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-3.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Fresh Watermelon"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Fresh Watermelon</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-4.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Stobery"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Stobery</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-5.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Pomagranate Fruit"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Pomagranate Fruit</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-6.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Lens Results Broccoli"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Lens Results Broccoli</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-7.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Lens Results Spinach"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Lens Results Spinach</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-8.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Lorigun Artificial"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Lorigun Artificial</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
            <li className="top-product-item">
              <div className="product-card top-product-card">
                <figure className="card-banner">
                  <img
                    src="./images/top-product-9.png"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Leaf lettuce"
                  />
                  <div className="btn-wrapper">
                    <button
                      className="product-btn"
                      aria-label="Add to Whishlist"
                    >
                      <ion-icon name="heart-outline" />
                      <div className="tooltip">Add to Whishlist</div>
                    </button>
                    <button className="product-btn" aria-label="Quick View">
                      <ion-icon name="eye-outline" />
                      <div className="tooltip">Quick View</div>
                    </button>
                  </div>
                </figure>
                <div className="card-content">
                  <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                  <h3 className="h4 card-title">
                    <a href="./product-details.html">Leaf lettuce</a>
                  </h3>
                  <div className="price-wrapper">
                    <del className="del">$75.00</del>
                    <data className="price" value={85.0}>
                      $85.00
                    </data>
                  </div>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
