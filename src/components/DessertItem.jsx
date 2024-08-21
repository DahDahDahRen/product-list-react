import { useState } from "react";
import { FaCartPlus, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export default function DessertItem({ dessertObj }) {
  const [changeCartBtn, setChangeCartBtn] = useState(false);

  function handleChangeBtn() {
    setChangeCartBtn((changeCartBtn) => !changeCartBtn);
    console.log(changeCartBtn);
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
            <button
              className={
                changeCartBtn === false
                  ? "cart-btn cart-btn-content-center"
                  : "cart-btn cart-btn-clr"
              }
              onClick={handleChangeBtn}
            >
              {changeCartBtn === false ? (
                <>
                  <FaCartPlus size={16} />
                  Add to Cart
                </>
              ) : (
                <>
                  <div className="cart-btn-active-container">
                    <button className="cart-btn-active">
                      <FaMinusCircle size={20} />
                    </button>
                    <p>1</p>
                    <button className="cart-btn-active">
                      <FaPlusCircle size={20} />
                    </button>
                  </div>
                </>
              )}
            </button>
          </div>
        </header>

        <main className="card-content">
          <p className="card-content-category">{dessertObj.category}</p>
          <h3 className="card-content-title">{dessertObj.name}</h3>
          <p className="card-content-price">$ {dessertObj.price}</p>
        </main>
      </article>
    </li>
  );
}
