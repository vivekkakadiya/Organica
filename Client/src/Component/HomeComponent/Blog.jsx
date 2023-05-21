import React from 'react'

export const Blog = () => {
  return (
    <>
     <section id='blog' className="section blog">
        <div className="container">
          <p className="section-subtitle"> -- News And Blog --</p>
          <h2 className="h2 section-title">Bright Side Vegetarianism</h2>
          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src="./images/blog-1.jpg"
                    width={451}
                    height={310}
                    loading="lazy"
                    alt="We automatically search for andapply coupons when."
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="wrapper-item">
                      <ion-icon name="calendar-clear-outline" />
                      <time className="text" dateTime="2022-04-13">
                        13 April, 2022
                      </time>
                    </div>
                    <div className="wrapper-item">
                      <ion-icon name="heart-outline" />
                      <span className="text">58 Million</span>
                    </div>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="/404">
                      We automatically search for andapply coupons when.
                    </a>
                  </h3>
                  <a href="/404" className="btn btn-primary">
                    <span>Read More</span>
                    <ion-icon name="chevron-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src="./images/blog-2.jpg"
                    width={451}
                    height={310}
                    loading="lazy"
                    alt="How to get more traffic in your website of ecommerce."
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="wrapper-item">
                      <ion-icon name="calendar-clear-outline" />
                      <time className="text" dateTime="2022-04-13">
                        13 April, 2022
                      </time>
                    </div>
                    <div className="wrapper-item">
                      <ion-icon name="heart-outline" />
                      <span className="text">58 Million</span>
                    </div>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="/404">
                      How to get more traffic in your website of ecommerce.
                    </a>
                  </h3>
                  <a href="/404" className="btn btn-primary">
                    <span>Read More</span>
                    <ion-icon name="chevron-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="blog-card">
                <figure className="card-banner">
                  <img
                    src="./images/blog-3.jpg"
                    width={451}
                    height={310}
                    loading="lazy"
                    alt="25 Rules and regulation to be successful in your business."
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="wrapper-item">
                      <ion-icon name="calendar-clear-outline" />
                      <time className="text" dateTime="2022-04-13">
                        13 April, 2022
                      </time>
                    </div>
                    <div className="wrapper-item">
                      <ion-icon name="heart-outline" />
                      <span className="text">58 Million</span>
                    </div>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="/404">
                      25 Rules and regulation to be successful in your business.
                    </a>
                  </h3>
                  <a href="/404" className="btn btn-primary">
                    <span>Read More</span>
                    <ion-icon name="chevron-forward" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
