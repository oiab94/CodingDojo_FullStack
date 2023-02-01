import { useState } from "react";
import axios from "axios";

const PersonForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
		axios.post(
			"http://localhost:8000/api/createUser",
			{nombre, apellido}
		)
			.then(res => console.log("Response: ", res))
			.catch(err => console.log("Error: ", err))
	};

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>
            Nombre:
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            Apellido:
            <input type="text" onChange={(e) => setApellido(e.target.value)} />
          </label>
        </p>
        <input type="submit" />
      </form>
    </>
  );
};
export default PersonForm;
