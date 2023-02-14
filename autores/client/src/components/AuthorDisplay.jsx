import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { useEffect, useState } from "react";
import axios from "axios"


// * Retorna un componente con todos los autores disopnibles
export default function AuthorDisplay() {
	const [name, setName] = useState([]);

	// * Cuando se agregen más autores se volvera a renderizar
	useEffect(
		()=>{
			axios.get("http://localhost:8000/api/getAuthors")
				.then(res => setName(res.data))
				.catch(err => console.log("No se recupero los datos", err))
		}, [name])

	return (
		<>
			{
				name.map(
					(item, index) => { 
						return (
						<tr key={index} >
							<td>{item.name}</td>
							<td>
								<ButtonEdit />
								<ButtonDelete />
							</td>
						</tr>
						)
					}
				)
			}
		</>
	);
}