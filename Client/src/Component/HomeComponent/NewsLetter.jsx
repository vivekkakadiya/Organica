import React from 'react'

export const NewsLetter = () => {
  return (
    <>
    <section className="section newsletter">
        <div className="container">
          <div className="newsletter-card">
            <p className="section-subtitle"> -- Subscribe Newsletter --</p>
            <h2 className="h2 section-title">
              Sign Up To Newsletter &amp; Get{" "}
              <span className="span">20% Off.</span>
            </h2>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required=""
                className="input-email"
              />
              <button type="submit" className="btn btn-primary">
                <span>Sign Up</span>
                <ion-icon name="chevron-forward" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
