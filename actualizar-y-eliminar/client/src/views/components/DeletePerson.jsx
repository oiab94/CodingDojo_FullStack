import { useState, useEffect } from "react";
import axios from 'axios';

const DeletePerson = () => {
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


	const deletePerson = (personId) => {
		axios.delete("http://localhost:8000/api/deleteUser/" + personId)
			.then(res => console.log("Removido"))
	}

	return (
		<div>
			<h1>Delete Person</h1>
			{
				people.map(
					(person, index) => {
						return (
							<p key={index}>
								{person.apellido} ,{person.nombre}
								<button onClick={(e) => {deletePerson(person._id)}}>delete</ button> 
							</p>
						);
					}
				)
			}
		</div>
	);
}
export default DeletePerson;