import axios from 'axios';
import { useEffect, useState } from 'react';

const PersonList = () => {
	const [people, setPeople] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getUsers")
				.then(res => {
					setPeople(res.data);
					setLoaded(true);
				})
				.catch(err => console.log(err))
		}, []
	);

	return (
		<>
			<h2>Resultado de la BD</h2>
			{
				people.map(
					(person, index) => 
						<p key={index}>{person.apellido}, {person.nombre}</p>
				)
			}
		</>
	);
}
export default PersonList;