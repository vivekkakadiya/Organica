import React from 'react'

export const CheckOut = () => {
  return (
    <>
    <div className="container">
  <div className="row">
    <div className="col-12 col-lg-6">
      <div className="card shadow mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-4 text-center">
              <img
                className="img-fluid border rounded shadow"
                src="assets/img/products/s-ttj6002188-tokyo-talkies-original-imaf8bvy9p4sggzp.jpeg"
              />
            </div>
            <div className="col">
              <p className="mt-2">
                <strong>Name of the product</strong>
                <span className="text-success">
                  <strong>&nbsp;</strong>
                  <i className="material-icons" style={{ fontSize: 16 }}>
                    verified_user
                  </i>
                  <strong>Verified Seller</strong>
                </span>
              </p>
              <p className="mt-2">
                <strong>$50.00</strong>
              </p>
              <div className="row">
                <div className="col">
                  <form>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Qty."
                        min={1}
                        max={8}
                        defaultValue={1}
                        name="qty"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-12 col-sm-6">
                  <button
                    className="btn btn-outline-dark d-block w-100"
                    type="submit"
                  >
                    Buy Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6">
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <p>Product Cost</p>
            </div>
            <div className="col">
              <p className="text-end">$ 150.00</p>
            </div>
          </div>
          <hr style={{ background: "#323232" }} />
          <div className="row">
            <div className="col">
              <p>Shipping Cost</p>
            </div>
            <div className="col">
              <p className="text-end">$ 10.00</p>
            </div>
          </div>
          <hr style={{ background: "#323232" }} />
          <div className="row">
            <div className="col">
              <p>Discount</p>
            </div>
            <div className="col">
              <p className="text-end">&nbsp;- $ 5.00</p>
            </div>
          </div>
          <hr style={{ background: "#323232" }} />
          <div className="row">
            <div className="col">
              <p style={{ fontSize: 18 }}>
                <strong>Total</strong>
              </p>
            </div>
            <div className="col">
              <p className="text-end" style={{ fontSize: 18 }}>
                <strong>$ 155.00</strong>
              </p>
            </div>
          </div>
          <hr style={{ background: "#323232" }} />
          <div className="row">
            <div className="col">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your coupon code"
                />
              </form>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-dark d-block w-100"
                type="submit"
              >
                Apply Code
              </button>
            </div>
          </div>
          <hr style={{ background: "#323232" }} />
          <div className="row">
            <div className="col-12 col-sm-6">
              <button
                className="btn btn-outline-dark d-block w-100"
                type="submit"
              >
                Cash On Delivery
              </button>
            </div>
            <div className="col">
              <button className="btn btn-primary d-block w-100" type="submit">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="formCheck-1"
                  name="size"
                  defaultValue="s"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="formCheck-1">
                  Address 1: Main St, Utah, 32465
                </label>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="formCheck-2"
                  name="size"
                  defaultValue="m"
                />
                <label className="form-check-label" htmlFor="formCheck-2">
                  Address 1: Main St, Arkansas, 72653
                </label>
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="formCheck-3"
                  name="size"
                  defaultValue="l"
                />
                <label className="form-check-label" htmlFor="formCheck-3">
                  Address 1: Main St, Texas, 28575
                </label>
              </div>
            </div>
          </form>
          <div className="col">
            <button
              className="btn btn-outline-dark d-block w-100"
              type="submit"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
