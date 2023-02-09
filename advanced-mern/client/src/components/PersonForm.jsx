/**
 * ! Creamos un formulario que se puede utilizar con cualquier método onSubmit
 * ! que tome "firstName" y "lastName" como un objeto.
 */
import { useState, useEffect } from "react";
import axios from "axios";

export default (props) => {
  // * Variables que recibimos de la vista
  const { initialFirstName, initialLastName, onSubmitProp } = props;
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  // * Indica como va a manejar el formulario su envio
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ firstName, lastName });
  };

  // * Retornamos la renderización de nuestro componente
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </p>
      <p>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </p>
      <input type="submit" />
    </form>
  );
};
