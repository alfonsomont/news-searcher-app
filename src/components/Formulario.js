import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ guardarCategoria }) => {
  const opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];
  //Utilizar custom Hook

  const [categoria, SelectNoticias] = useSelect("science", opciones);

  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s2 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Find news by its category</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              className={`${styles.btn_block} btn-large amber darken-2`}
              type="submit"
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
