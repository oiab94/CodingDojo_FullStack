import axios from "axios";
import { useEffect, useState } from "react";
import DeleteButton from "../components/DeleteButton";
import PersonForm from "../components/PersonForm";

export default (props) => {
	const { id } = props;
	const [person, setPerson] = useState();
	const [loaded, setLoaded] = useState(false);

	useEffect(
		() => {
			axios.get("http://localhost:8000/api/people" + id)
			.then(
				(res) => {
					setPerson(res.data);
					setLoaded(true);
			})
		}, []
	)

	const updatePerson = (person) => {
		axios.put("http://localhost:8000/api/people" + id, person)
			.then(res => console.log(res));
	}

	// * Utilizamos nuevamente nuestro formulario pero, esta vez vamos enviar una 
	// * funcion de actualización
	return (
		<>
			{
				loaded && 
				<>
				<PersonForm
					onSubmitProp={ updatePerson }
					initialFirstName=""
					initialLastNAme="" />
				<DeleteButton 
					personId={person._id}
					successCallback={() => props.history.push("/people/")} />
				</>
			}
		</>
	);
}