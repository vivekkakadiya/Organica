import React from 'react'

export const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">25% off all products.</p>
            <h2 className="h1 hero-title">
              Qualityful <span className="span">organic</span>
              fruit &amp; <span className="span">vegetables.</span>
            </h2>
            <p className="hero-text">
              It has survived not only five centuries also there leaped.
            </p>
            <a href="/shop" className="btn btn-primary">
              <span className="span">Shop Now</span>
              <ion-icon name="chevron-forward" aria-hidden="true" />
            </a>
          </div>
          <figure className="hero-banner">
            <img
              src="./images/hero-banner.png"
              width={603}
              height={634}
              loading="lazy"
              alt="Vegetables"
              className="w-100"
            />
          </figure>
        </div>
      </section>
    </>
  )
}
