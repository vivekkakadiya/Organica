import React, { useEffect } from "react";
import { Footer } from "../Component/Footer";
import { Header } from "../Component/Header";

export const Cart = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="px-4 px-lg-0">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  {/* Shopping cart table */}
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" className="border-0 bg-light">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" className="border-0">
                            <div className="p-2">
                              <img
                                src="https://res.cloudinary.com/mhmd/image/upload/v1556670479/product-1_zrifhn.jpg"
                                alt=""
                                width={70}
                                className="img-fluid rounded shadow-sm d-inline "
                              />
                              <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0">
                                  {" "}
                                  <a
                                    href="#"
                                    className="text-dark d-inline-block align-middle"
                                  >
                                    Timex Unisex Originals
                                  </a>
                                </h5>
                                <span className="text-muted font-weight-normal font-italic d-block">
                                  Category: Watches
                                </span>
                              </div>
                            </div>
                          </th>
                          <td className="border-0 align-middle">
                            <strong>$79.00</strong>
                          </td>
                          <td className="border-0 align-middle">
                            <div className="qty2">
                              <form action="#" className="display-flex">
                                <button className="qtyminus1">-</button>

                                <input
                                  type="text"
                                  name="quantity"
                                  defaultValue={1}
                                  className="qty1"
                                />
                                <button className="qtyplus1">+</button>
                              </form>
                            </div>
                            {/* <div className="qtyminus">-</div>
                            <i class="fa-light fa-plus"/>
                            <strong>3</strong>
                            <div className="qtyplus">+</div> */}
                          </td>
                          <td className="border-0 align-middle">
                            <a href="#" className="text-dark">
                              <i className="fa fa-trash" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* End */}
                </div>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>$390.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>$10.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>$0.00</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">$400.00</h5>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
