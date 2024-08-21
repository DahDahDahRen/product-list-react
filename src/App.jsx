import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

function App() {
  //* Global State
  const [desserts, setDesserts] = useState([]);

  //* Fetch JSON data
  async function getDesserts() {
    try {
      const response = await fetch("././data.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  //* Component Side effect
  useEffect(() => {
    async function getJSONData() {
      const data = await getDesserts();
      setDesserts(data);
    }
    getJSONData();
  }, []);

  //* JSX
  return (
    <>
      <div className="container">
        <div className="main-display">
          <Desserts desserts={desserts} />
          <Cart />
        </div>

        {createPortal(
          false && <Modal />,
          document.querySelector("#modal-container")
        )}
      </div>
    </>
  );
}

export default App;
