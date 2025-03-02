const Cart = () => {
  //Manejo de Eliminar item
  const handleDelete = () => {
    console.log("eliminar");
  };

  return (
    <>
      <div id="carrito" className="bg-white p-3">
        <p className="text-center">El carrito esta vacio</p>
        <table className="w-100 table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="img-fluid"
                  src="./public/img/guitarra_02.jpg"
                  alt="imagen guitarra"
                />
              </td>
              <td>SRV</td>
              <td className="fw-bold">$299</td>
              <td className="flex align-items-start gap-4">
                <button type="button" className="btn btn-dark">
                  -
                </button>
                1
                <button type="button" className="btn btn-dark">
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={handleDelete}
                  className="btn btn-danger"
                  type="button"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-end">
          Total pagar: <span className="fw-bold">$899</span>
        </p>
        <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
      </div>
    </>
  );
};

export default Cart;
