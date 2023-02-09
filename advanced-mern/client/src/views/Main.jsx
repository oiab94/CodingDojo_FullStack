import { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";

export default () => {
	const [people, setPeople] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(
		() => {
			axios.get("http://localhost:8000/api/people")
				.then(
					(res) => {
						setPeople(res.data);
						setLoaded(true);
					}
				);
		}, []
	);

	const removeFromDom = (personId) => {
		setPeople(
			people.filter(
				(person) =>  person._id !== personId 	
			));
	}

	const createPerson = (person) => {
		axios.post("http://localhost:8000/api/people", person)
			.then((res) => { setPeople([...people, res.data]) });
	}

	// * Renderizamos nuestra vista principal 
	// * A nuestro Form le mandamos los datos necesarios para su funcionamiento
	return (
		<div>
			<PersonForm
				onSubmitProp={ createPerson }
				initialFirstName=""
				initialLastName="" />
			<hr />
		</div>
	)
}