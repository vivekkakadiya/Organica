import React from 'react'

export const Feedback = () => {
  return (
    <>
    <section className="section testimonials">
        <div className="container">
          <p className="section-subtitle"> -- Some Testimonial --</p>
          <h2 className="h2 section-title">Feedback From Happy Clients</h2>
          <ul className="has-scrollbar">
            <li className="testi-item">
              <div className="testi-card">
                <div className="card-header">
                  <img
                    src="./images/quote-left.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                  <img
                    src="./images/testimonial-1.jpg"
                    width={90}
                    height={90}
                    loading="lazy"
                    alt="Willow Peralta"
                    className="card-avatar"
                  />
                  <img
                    src="./images/quote-right.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                </div>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <blockquote className="card-text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem passages and more recently with
                  desktop publishing software like including.
                </blockquote>
                <h3 className="card-title">Willow Peralta</h3>
                <p className="card-subtitle">Web Developer</p>
              </div>
            </li>
            <li className="testi-item">
              <div className="testi-card">
                <div className="card-header">
                  <img
                    src="./images/quote-left.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                  <img
                    src="./images/testimonial-2.jpg"
                    width={90}
                    height={90}
                    loading="lazy"
                    alt="Pamelia Hamrick"
                    className="card-avatar"
                  />
                  <img
                    src="./images/quote-right.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                </div>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <blockquote className="card-text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem passages and more recently with
                  desktop publishing software like including.
                </blockquote>
                <h3 className="card-title">Pamelia Hamrick</h3>
                <p className="card-subtitle">Web Developer</p>
              </div>
            </li>
            <li className="testi-item">
              <div className="testi-card">
                <div className="card-header">
                  <img
                    src="./images/quote-left.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                  <img
                    src="./images/testimonial-3.jpg"
                    width={90}
                    height={90}
                    loading="lazy"
                    alt="Novella Gerber"
                    className="card-avatar"
                  />
                  <img
                    src="./images/quote-right.png"
                    width={25}
                    height={25}
                    aria-hidden="true"
                    alt=""
                  />
                </div>
                <div className="rating-wrapper">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <blockquote className="card-text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem passages and more recently with
                  desktop publishing software like including.
                </blockquote>
                <h3 className="card-title">Novella Gerber</h3>
                <p className="card-subtitle">Web Developer</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
