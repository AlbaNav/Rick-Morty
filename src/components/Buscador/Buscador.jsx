import React from "react";


const Buscador = ({texto, setTexto}) => {


  const handleInputChange = ({target}) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="buscador">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          placeholder="buscar..."
          value={texto}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
export default Buscador;