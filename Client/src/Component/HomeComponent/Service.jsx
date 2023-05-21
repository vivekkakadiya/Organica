import React from 'react'

export const Service = () => {
  return (
    <>
     <section className="section service">
        <div className="container">
          <ul className="service-list">
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="./images/service-icon-1.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Truck icon"
                />
              </div>
              <h3 className="h3 item-title">Free Shipping</h3>
            </li>
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="./images/service-icon-2.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Payment card icon"
                />
              </div>
              <h3 className="h3 item-title">Safe Payment</h3>
            </li>
            <li className="service-item">
              <div className="item-icon">
                <img
                  src="./images/service-icon-3.png"
                  width={40}
                  height={40}
                  loading="lazy"
                  alt="Helpline icon"
                />
              </div>
              <h3 className="h3 item-title">24/7 Support</h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
