import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer id='contact' className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="/" className="logo">
            Organ<span className="span">ica</span>
          </a>
          <p className="footer-text">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem passages and more recently with desktop publishing
            software like including.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-skype" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Company</p>
          </li>
          <li>
            <a href="/about" className="footer-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/shop" className="footer-link">
              Shop
            </a>
          </li>
          <li>
            <a href="/blog" className="footer-link">
              Blog
            </a>
          </li>
          <li>
            <a href="/shop" className="footer-link">
              Product
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact</p>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="location-outline" />
            </div>
            <address className="contact-link">
              7 Green Lake Street Crawfordsville, IN 47933
            </address>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="call-outline" />
            </div>
            <a href="tel:+1800123456789" className="contact-link">
              +1 800 123 456 789
            </a>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="mail-outline" />
            </div>
            <a href="mailto:organica@help.com" className="contact-link">
              organica@help.com
            </a>
          </li>
        </ul>
        <div className="footer-list">
          <p className="footer-list-title">Newsletter</p>
          <p className="newsletter-text">
            You will be notified when somthing new will be appear.
          </p>
          <form action="" className="footer-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required=""
              className="footer-input"
            />
            <button
              type="submit"
              className="footer-form-btn"
              aria-label="Submit"
            >
              <ion-icon name="mail-outline" />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2022{" "}
          <a href="#" className="copyright-link">
            vivekkakadiya
          </a>
          . All Rights Reserved.
        </p>
        <ul className="footer-bottom-list">
          <li>
            <a href="#" className="footer-bottom-link">
              Term and Service
            </a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </>
  )
}
