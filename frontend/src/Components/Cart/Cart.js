import React, { useEffect } from "react";
import axios from "axios";
import Header from '../Header';
import CartList from "./CartList";
import Footer from "../Home/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const durl = "http://localhost:4000/cartData";
const purl = "http://localhost:4000/placeOrder";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state ? location.state.order_id : false;
  const quant = location.state ? location.state.quant : false;

  useEffect(() => {
    if (data) {
      fetch(`${durl}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(res => res.json())
        .then(result => {
          let totalPrice = 0;
          let menuOrder = [];

          result.map(item => {
            let qcount = 0;
            for (let i = 0; i < data.length; i++) {
              console.log("item-id: ", item.id)
              if (item.id === data[i]) {
                qcount = qcount + quant[i];
              }
            }
            totalPrice = totalPrice + parseFloat(item.price) * qcount;

            return (menuOrder.push({
              "image": item.image,
              "title": item.title,
              "price": item.price,
              "quantity": qcount,
            }));
          });
          sessionStorage.setItem("totalPrice", totalPrice);
          sessionStorage.setItem("menuOrder", JSON.stringify(menuOrder));
        });
    } // if end
  }, [data]);

  const placeOrder = () => {
    const menuOrder = JSON.parse(sessionStorage.getItem("menuOrder"));
    const user = JSON.parse(sessionStorage.getItem("userInfo"));
    const userOrder = {
      orderData: menuOrder,
      userInfo: user,
      date: new Date().toLocaleDateString(),
      status: "pending",
    }
    axios.post(purl, { userOrder });
    navigate("/booking");
  };

  return (
    <>
      <Header />
      <div className="text-center">
        <h2>Cart Items</h2>
        {data ? <CartList /> : <p className="text-danger">No items found !</p>}
        <button className="btn btn-success my-2" onClick={placeOrder}>
          Place Order
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
