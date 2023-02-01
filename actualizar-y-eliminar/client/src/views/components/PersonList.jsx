import axios from 'axios';
import { useEffect, useState } from 'react';

const PersonList = () => {
	const [people, setPeople] = useState([]);

	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getUsers")
				.then(res => {
					setPeople(res.data);
				})
				.catch(err => console.log(err))
		}, []
	);

	return (
		<>
			<h1>Resultado de la BD</h1>
			{
				people.map(
					(person, index) => 
						<p key={index}>
							{person.apellido}, 
							{person.nombre}, 
							{person._id}</p>
				)
			}
		</>
	);
}
export default PersonList;