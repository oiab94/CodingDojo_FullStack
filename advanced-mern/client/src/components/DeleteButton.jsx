import axios from "axios";

export default (props) => {
	const { personId, successCalback} = props;
	
	const deletePerson = (e) => {
		axios.delete("http://localhost:8000/api/people" + personId)
			.then(
				(res) => successCalback()
			)
	}

	return (
		<button onClick={ deletePerson }>Delete</button>
	);
}