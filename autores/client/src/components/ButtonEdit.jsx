import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ButtonEdit() {

	return (
		<>
			<Button
				as={ Link } to="edit/"
				className="mx-2"
				size="md"
				variant="primary" >Edit</Button>
		</>
	);
}
