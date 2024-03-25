//DB
import { db } from "./data/db.js";
import { useState, useEffect } from "react";

//Componentes
import Header from "./components/Header";
import Guitarra from "./components/Guitarra";
import "./App.css";

function App() {
  //Inicial cart
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");

    if (localStorageCart) {
      return JSON.parse(localStorageCart);
    } else {
      return [];
    }
  };

  //State
  const [guitarras, setGuitarras] = useState([]);
  const [cart, setCart] = useState(initialCart);

  //Effect
  useEffect(() => {
    setGuitarras(db);
  }, []);

  //FUNCIONES
  const MAX_ITEMS = 5;

  //Agregar item a cart
  let addToCart = (guitarra) => {
    const guitarExist = cart.findIndex((item) => item.id === guitarra.id);

    if (guitarExist >= 0) {
      const updateCart = [...cart];
      updateCart[guitarExist].cantidad++;
      setCart(updateCart);
    } else {
      guitarra.cantidad = 1;
      setCart([...cart, guitarra]);
    }
  };

  //Eliminar item de cart
  const removeToCart = function (guitarra) {
    const deleteItem = (prevCart) =>
      prevCart.filter((item) => item.id !== guitarra);
    setCart(deleteItem);
  };

  //Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  //Modificar cantidad +
  const incrementCantidad = (guitarra) => {
    const guitarExist = cart.findIndex((item) => item.id === guitarra);

    if (guitarExist >= 0 && cart[guitarExist].cantidad < MAX_ITEMS) {
      const updateCart = [...cart];
      updateCart[guitarExist].cantidad++;
      setCart(updateCart);
    }
  };

  //Modificar cantidad -
  const decrementCantidad = (guitarra) => {
    const guitarExist = cart.findIndex((item) => item.id === guitarra);

    if (guitarExist >= 0 && cart[guitarExist].cantidad > 1) {
      const updateCart = [...cart];
      updateCart[guitarExist].cantidad--;
      setCart(updateCart);
    }
  };

  //LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header
        cart={cart}
        removeToCart={removeToCart}
        clearCart={clearCart}
        incrementCantidad={incrementCantidad}
        decrementCantidad={decrementCantidad}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {guitarras.map((guitarra) => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra}
              setCart={setCart}
              addToCard={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
