import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);
  const [product4, setProduct4] = useState(500);

  return (
    <div className="App">
      <div>
        <h3>Cart products {totalItems}</h3>
        <h3>totalprice in cart {totalPrice} Baht</h3>
      </div>
      <div>
        <img src="p1.jpg" alt="case" width="15%" /> <br />
        case phone price {product1} Baht
      </div>{" "}
      <br />
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add cart
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        Remove cart
      </button>
      <div>
        <img src="p2.jpg" alt="case" width="15%" /> <br />
        case phone price {product2} Baht
      </div>{" "}
      <br />
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product2);
        }}
      >
        Add cart
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        Remove cart
      </button>
      <div>
        <img src="p3.jpg" alt="case" width="15%" /> <br />
        case phone price {product3} Baht
      </div>{" "}
      <br />
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product3);
        }}
      >
        Add cart
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        Remove cart
      </button>
      <div>
        <img src="p4.jpg" alt="case" width="15%" /> <br />
        case phone price {product4} Baht
      </div>{" "}
      <br />
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product4);
        }}
      >
        Add cart
      </button>{" "}
      &nbsp;
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product4);
          }
        }}
      >
        Remove cart
      </button>
    </div>
  );
}

export default App;
