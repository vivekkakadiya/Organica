import React from 'react'

export const Offers = () => {
  return (
    <>
     <section className="section offers">
        <div className="container">
          <ul className="offers-list has-scrollbar">
            <li className="offers-item">
              <a href="/shop" className="offers-card">
                <figure className="card-banner">
                  <img
                    src="./images/offer-1.png"
                    width={292}
                    height={230}
                    loading="lazy"
                    alt="Fresh vegetables package"
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Up To 25% Off</p>
                  <h3 className="h3 card-title">Fresh vegetables package.</h3>
                  <div className="btn btn-primary">Shop Now</div>
                </div>
              </a>
            </li>
            <li className="offers-item">
              <a href="/shop" className="offers-card">
                <figure className="card-banner">
                  <img
                    src="./images/offer-2.png"
                    width={336}
                    height={244}
                    loading="lazy"
                    alt="Healthy & fresh beef"
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <p className="card-subtitle">Up To 25% Off</p>
                  <h3 className="h3 card-title">Healthy &amp; fresh beef.</h3>
                  <div className="btn btn-primary">Shop Now</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
