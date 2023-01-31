import {useState, useEffect} from 'react';
import axios from 'axios';

const PruebaAxios = () => {
	const [message, setMessage] = useState("...loading");
	
	// *Con axios recuperamos los datos del backend
	useEffect(
		() => {
			axios.get("http://localhost:3000/api")
				.then(
					(res) => {
						console.log("Se encontro la dirección");
						setMessage(res.data.message);
					}
				)
				.catch(
					(res) => console.log("No hubo respuesta del servidor")
				)
		},
		[]
	)

	return(
		<>
			<p>
				<h1>Message from the backend: {message}</h1>
			</p>
		</>
	);
}
export default PruebaAxios;