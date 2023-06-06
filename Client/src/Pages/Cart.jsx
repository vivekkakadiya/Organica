import React, { useEffect, useState } from "react";
import { Footer } from "../Component/Footer";
import { Header } from "../Component/Header";
import { Items } from "../Component/CartComponent/Items";

export const Cart = () => {
  useEffect(() => { window.scrollTo(0, 0) }, []);

  
      const [data, setdata] = useState();
      const[item,setItem]=useState([]);
      const [loading, setLoading] = useState(false);


      useEffect(() => {
        const fatchCart = async () => {
          // get cart item
          const res = await fetch("http://localhost:9090/cart/1");
          const data = await res.json();
          setItem(data.cartDetalis);
          // console.log(item);
        };
        fatchCart();
      }, []);
      
      // useEffect(() => {
      //   const fatchCart = async () => {
      //     // get cart item
      //     const res = await fetch("http://localhost:9090/cart/1");
      //     const data = await res.json();
      //     setItem(data.cartDetalis);
      //     // console.log(item);
      //   };
      //   fatchCart();
      //   console.log("11");
      // }, [loading]);

    
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

                        {item.map((elem,index) => {
                          return (
                            <>

                              <Items
                                key={index} prop={elem} />
                              </>
                          )})
                        }

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

// {
//   "user": {
//       "date": null,
//       "password": "123",
//       "role": "admin",
//       "userid": 1,
//       "email": "vivek",
//       "contact": "3223",
//       "fname": "vivek",
//       "lname": "k"
//   },
//   "cartDetalis": [
//       {
//           "products": {
//               "description": "vivek",
//               "productName": "vivek",
//               "weight": 11,
//               "img": "eJwBFgvp9FJJRkYOCwAAV0VCUFZQOCACCwAAsDEAnQEqpwCnAD49HIxEoiGhEioFcCADxLOB408x+WOH7vbgbnlX0DoDdL57f9tOaH1J5kfTt8t6/f6nvx4AXrb/Lflpwr9o/9V6gXqh9u/13pxzR7q7j2KAH5z/zf3GfIf/0f5P8qvbj9E/9//MfAL/L/63/wvWx9kf7ZeyB+yxSQPhmU7eCPOwKqztigq1mdbzTcMLvEexCY4HFkO/KJm0utVmSjIq2rMXTiXhP5BtcZ8m33/bqw09OKL4djYVWyC8681iYa9xTVBvlY+CoVBcmyS4V1LpU6Z42B42QEBk6Ru+hq0DXg2IXLbem03iqGk4bFf57G5/bwLOil/Hy80wVWqta/qlbKtf9JDdVb1aI+oYeCZn7z2cSMFPbMhgKSr1A75ic3yKmRQ8Hm5wmbIH0yyoVAVMK5F5KNB9iykrFO+mXkUU8WRBcrz3pJs6D78h+ZB41i8snJPN3cjpREZVNKk9oAXgzcbYWWCZByFyE/ZaGHpfhMn6AaNwN0cDQIg5ItKlcp4FNoYA5v+67fQrbh4kAAD+/iRtqY/p7ojYgJiLYXkqPfOSbhyd7j5iT3en9Qepzs66hQPQ03vcofE+cZAaDY/6uqhLlVuIgAuX8MEj7usGzU4vrsdCOCdbSTkCjydq/XnLOCk6kmyZUyYSkgPM09zjkNPUqvGR3XrJq5vr9svrRX2sRXxQwU+r649D8LHpp3twgwjG7Ae9vbzr6wUidqvIhtnPH0/YETvZWm5NZYOcK+4WOLx+IMoAfG+aGBf3airU7utURIrZkxWMAHWjHZIDgnPsIGbQ50N765vp3MwY5bpXhZmQdVSeBi8AvIX7r9cx3h8qqx+FcESdYvXN7b4IFCBQL2qG4IAkm7pMWd0ZHVujoFPUC/OQ+r28SnSQIMpN3dfaAU5oosWdqEyfuoiRoBKhln33Nl020gQ957H9ZEwyAvFRjKONHxjXSuKO0XFsNlBJzLZEdjynL8bqWJnHJSC1FzBCVR+ux6ul22W6TNIRDEHDBsokfBTVfyQtaQr1nTsBKDcm7/8whM/Qx4NxoEqpbF+uEEniAXMEGw8HzYa8vfoYIdtjGMuWeY+f4O4x/sH6GytnVwXIQvaVu17cd+mspHyKPYKYIQEGe9OLpiVfrV7JrRYVG1Kz+TLDcqNIHvcPNaC5Kq67byMSjuYd4ph2C3lQWOCV5WNIxYgv0OBh/zXDTwJkXL5bBAE7MAyZEDBlDqXDiVa9idgchL55+AAOi9tou4ytchwt3fubZKk7P7I7LF3nRhdnSpwwSeaWqutdFiQrnmKhWBzFU8HEFdt8PjsdIX1SfngdGngpQww2t4QVZQ22cVvgNZWD749/sPTOdJ+QoxeHhNqFKd59w4byeWuPSsr508ZqfuXVtEU8G/vl8+1k5NvlLI78lLW4YFW878DbCkb/8ruBxADM9qdDK2rQUoIfJ9G2LiKsxtdD7+N2z9nSprL5AzPLV4CdCQd5QYTdMojdFpdzryDQWgcZHM+lfbjsqZfiIMBPQsBOi4KfbKORRFNZ0qulU5oTZPzgtxvWSKaDQQ4oA0MBgYEE8Rgj2PPLCjqxVTmgEmBUcGMKezHsJivfhjQdLPrcVCXvp6E79bbRnmrQ48H+VEH5mclv1yABRRVv6qJenRK8gnmmJ6ydc4q8zmL+Ek1KDiky2edpyjUQoZiA65rOt1nbRQld+bz877PQiJo1p9H6R7l8jf4xHn+FpnAHBk5APfJqQUw+WhtDHzRqENyeh5XMUDxO2wUf/eY+U/yZ3YoKlWZ1UHkPBifadlHV3zmfuq2ErMX5+Hxvu5AsD2TyRTyYqS6lCpVgspklX5ngye/ZkzfeBOZA3btLN+zoXRsXuyKY33BIfnnCzrOMsaFNjEhKP254fNvDS5SVRvXNQDJgCyCJcheZn0Gh2xBAv3VfM+z7Kr9EtsU77qEr46avWYZXho35bZCBon5flRuuL810V07eZmhuKAbLG9xNkbEcb+LH+5X8LOaIWlDqWPagM+IWfDZ7hJ8Oygzlpj+WKJzS/Gk/cYetf9qfLSTwKwhTkS2lV8u5+XTFjWBPv09uR1VndP/FRMwrGpeeAKaeV3ws/8A0ght7eQTSXWwkBK/1sb4eGg10JjjiOjKjVTOjRDYo6bQEzrhOO4aAKZSblwMb6jwUvW5f47ZjdUozHC+kH7fi0XdZ5JQn7QgDHRk//mcOluk5ZBRzwude+yYBJumZ3QElymuZCKj6wfEW6dTyhSL/TStgbgvBCf/8DJqGkW+6zUe/LqvqQn9kULUR7F56Zwn5ojg5JGROva8GPSQ+2IudleiGSjHg8v+fPxyDFBfjbK3P3k0PMPcILNbf/Rc7bAQM2K06YjGpv1pt6Yq/80P8f6QBYBSioFbk8ydXqsU3QCREdDucGmseYqs3uoL/itG0fY1wZAwRBOOqASWs5+MaXvUkJTLbj4JFOJViF0fIcz/ltakOoOJ6Z9zqm7j4k/S5421E8zCzqVB7peqLk2bAE2oYwtWPPI0fLrjPkMzeGcZGIuDcG1Ha53JqqQ6aUzzCLp6EDfXrrFnoQphLFoPO72asKVVEiTCd3edTlib3ixh/tMwiHlZhEsHZZk0JU666zIo9PiyCdbBa8AGz6xpSQOVyzR++7XbtWoNbAxs3sls6BmwVPd3Q9LiUe5dTUUs1fybKivRchP5mswn1GnkTLx3liHbS4sw5aRGm+NUJpFLunQlcXxDuAqggM+e+w88CgvF+CUHKnd0D82okgzO0BAak+U78cRbnQBiwxMOTcga4MV97MrwjaV3d04/vhfz2E0w/zRdXbDB/HZZiJl9cAkML/K2R4bW5PSL5geslZhrjGtizsHCADfiZ8M/isVkPmLGlFGkDl/ud+X//FDSvJt0f6BRt48OwvLE19BEg4T+gCqu0yYwvFBuNtANfmo2j84urfzQD7T/FtZvLRBJKIz5/v0W0Psi8fBm5l/82IO8UvaKMC/x1VcuuU0K67qgApy+7zu1iJuiyHZADVHQyLRcor1YqrWWn+t5bFxpShdmUL+DqNaHLrcNA1jel4V6a5cbmB9hbHa1YqCLX9qQhBOejDor7AvwR/a8Hl+1YFc4zA4tJmsqYtd5Bo43qn3jPyLJH55WbpLazECdB+xjGcqnXGOR4/O/5NQS7rY58oWAfms6EgAyDKd2K1D7xDH6csgFj1HFz7U4SCuwkow5C1eBBrLlXypxVqMHvOvdf4LkX7i6Gsf3Qjt+VdRabETmyRHntHmIwLZCiXt3sa7X+Del9j3QPx7IqAObnvHj6w0rVRpRoLPSQJTGfPBZQxM5MKR3vNw0T75Q90YMpcChWhhoU1gKwEtpTAAFE+QWK8ipz/mC/KRVQDfOtQAtTQLmupWaRGm0GHzxJagk8W0zakcIgCypkdkIWr4ezLxOj/ZBMtIGPrro9l1RvE7F1FDWhjfm8ilPtE0xmEu0iN1VnIimd01ePBFReppgAcW5qIMYWQpdAD4AFoZI6ebgku62LUbge+JNGt/PoPkVV7cgdvZw8BXSFzA693nx/hgVRhiwsbwa2RdLPoYScixYCM89cevN4wq3EyU4liam4g8P7Oy2yDEqqUGDq4Qm1YCKGdsHG1dDUCCEBUkoFoRpgDU3dZ2C8yO5TYmIsBHSJ4gnxigmYIviWQpkyhs9UR0cKlRm/XWUoSiKyMEbHX1GZnATOXlEATjUNMe3ACztWM9GDwpUAE6TJaQWiZ/1THeFvlHVwAAAAAOJzaws=",
//               "price": 110,
//               "productid": 1
//           },
//           "quantity": 10,
//           "amount": 1100,
//           "cartDetalisId": 2
//       }
//   ],
//   "id": 1,
//   "totalAmount": 1100
// }