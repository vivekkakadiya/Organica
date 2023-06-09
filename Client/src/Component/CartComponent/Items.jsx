import React, { useState } from "react";

export const Items = ({ prop ,setLoading}) => {
  const [quantity, setQuantity] = useState(prop.quantity);
  console.log("out : "+quantity);
  
  const [item2, setItem2] = useState(prop.products);
  // console.log(quantity);
  const updateQuantity = async (q) => {
    console.log("in : "+q);

    const res = await fetch(
      `http://localhost:9090/cart/addproduct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          productId: prop.products.productid,
          quantity: q,
        }),
      }

      );
    const temp= await res.json();
    // console.log(temp);
    setLoading(temp);
    
    // setQuantity(temp.cartDetalis.quantity);
};

  const handleQuantity = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    updateQuantity();
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(quantity - 1);
    }
  };
  const handlePlus = () => {
    if (quantity > 0) {
      
      setQuantity(quantity + 1);
      updateQuantity(quantity + 1);
    }
  };
  
  const handleRemove = async () =>{
    //call delete api without body
    const res = await  fetch(
      `http://localhost:9090/cart/user/1/product/${prop.products.productid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }

      );
      const t=await res.json();
      setLoading(t);

    
  }

  return (
    <>
      <tr>
        <th scope="row" className="border-0">
          <div className="p-2">
            <img
              src={`data:image/png;base64,${item2.img}`}
              alt=""
              width={70}
              className="img-fluid rounded shadow-sm d-inline "
            />
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0">
                {" "}
                <a href="#" className="text-dark d-inline-block align-middle">
                  {item2.productName}
                </a>
              </h5>
              <span className="text-muted font-weight-normal font-italic d-block">
                Category: Watches
              </span>
            </div>
          </div>
        </th>
        <td className="border-0 align-middle">
          <strong>{item2.price}</strong>
        </td>
        <td className="border-0 align-middle">
          <div className="qty2 display-flex">
            <button className="qtyminus1" onClick={() => handleMinus()}>
              -
            </button>

            {/* <form  className="display-flex"> */}
            <input
              type="text"
              name="quantity"
              onChange={(e) => handleQuantity(e)}
              value={quantity}
              className="qty1"
            />
            {/* </form> */}
            <button className="qtyplus1" onClick={() => handlePlus()}>
              +
            </button>
          </div>
          {/* <div className="qtyminus">-</div>
                            <i class="fa-light fa-plus"/>
                            <strong>3</strong>
                            <div className="qtyplus">+</div> */}
        </td>
        <td className="border-0 align-middle">
          <a  className="text-dark" onClick={()=>handleRemove()}>
            <i className="fa fa-trash" />
          </a>
        </td>
      </tr>
    </>
  );
};
