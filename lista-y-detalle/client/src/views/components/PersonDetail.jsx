import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams} from 'react-router-dom';

const PersonDetail = () => {
	const [person, setPerson] = useState({});
	const personId = useParams();
	
	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getOneUser/" + personId.id)
				.then(res => setPerson(res.data))
				.catch(err => console.log(err))
		}, []
	)

	return (
		<div>
			<p>Nombre: {person.nombre}</p>
			<p>Apellido: {person.apellido}</p>
		</div>
	);
}
export default PersonDetail;