import { useState } from "react";
import { FaCartPlus, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

//* Dessert Item
export default function DessertItem({ dessertObj }) {
  //* Local Component State
  const [changeCartBtn, setChangeCartBtn] = useState(false);
  const [quantity, setQuantity] = useState(1);

  //* Handler function
  function handleChangeBtn() {
    setChangeCartBtn((changeCartBtn) => !changeCartBtn);
    console.log(changeCartBtn);
  }

  function handleDecreaseQty() {
    if (quantity === 0) {
      return;
    }

    setQuantity((quantity) => quantity - 1);
  }

  function handleIncreaseQty() {
    setQuantity((quantity) => quantity + 1);
  }

  function checkNumberIfInt(quantity) {
    return Number.isInteger(quantity) ? `${quantity}.00` : `${quantity}0`;
  }

  return (
    <li>
      <article className="card">
        <header className="card-header">
          <img
            className="card-header-img"
            src={dessertObj.image.desktop}
            alt="header img!"
          />

          <div className="card-controller">
            {changeCartBtn === false ? (
              <button className="cart-btn" onClick={handleChangeBtn}>
                <FaCartPlus size={16} />
                Add to Cart
              </button>
            ) : (
              <div className="cart-quantity-controller">
                <button onClick={handleDecreaseQty}>
                  <FaMinusCircle />
                </button>

                <span className="cart-quantity">{quantity}</span>

                <button onClick={handleIncreaseQty}>
                  <FaPlusCircle />
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="card-content">
          <p className="card-content-category">{dessertObj.category}</p>
          <h3 className="card-content-title">{dessertObj.name}</h3>
          <p className="card-content-price">
            $ {checkNumberIfInt(+dessertObj.price)}
          </p>
        </main>
      </article>
    </li>
  );
}
