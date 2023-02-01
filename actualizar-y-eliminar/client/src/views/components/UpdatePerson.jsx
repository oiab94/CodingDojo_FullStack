import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const UpdatePerson = () => {
	// * Aqui debemos recibir el parametro ID
	const id = "63d9ca979d4b393d37517980";
	const [nombre, setNombre] = useState();
	const [apellido, setApellido] = useState();

	// * Recuperamos una sola vez los datos al renderizar
	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getOneUser/" + id)
				.then(
					res => {
						setNombre(res.data.nombre);
						setApellido(res.data.apellido);
				})
		},[]
	)

	// *Enviamos los nuevos datos a la BD
	const updatePerson = e => {
		e.preventDefault();
		axios.put(
			"http://localhost:8000/api/updateUser/"+ id, 
			{nombre, apellido})
			.then(res => console.log(res))
	}

	return (
		<div>
			<h1>Update Person</h1>
			<form onSubmit={updatePerson}>
				<p>
					<label>Nombre</label>
					<input 
						type="text"
						name="nombre"
						onChange={e => setNombre(e.target.value)} />
				</p>
				<p>
					<label>Apellido</label>
					<input
						type="text"
						name="apellido"
						onChange={e => setApellido(e.target.value)} />
				</p>
				<input type="submit" />
			</form>
		</div>
	);
}
export default UpdatePerson;