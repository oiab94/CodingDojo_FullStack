import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

export default function AuthorNew() {
	const [name, setName] = useState("");
	const [changePage, setChangePage] = useState(false);

	// * Envia el resultado a la BD
	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e);
		axios.post(
			"http://localhost:8000/api/newAuthor",
			{ name })
			.then(res => console.log("Response: ",res))
			.catch(err => console.log("Error: ", err));
		setChangePage(true);
	}

	return (
		<>
		<Container className="mt-3">
			<Row>
			<Col md="auto" className="border border-3 p-3 ">
				<Form onSubmit={onSubmitHandler}>
					<Form.Group className="mb-3" controlId="formAuthorEdit">
						<Form.Label>Name:</Form.Label>
						<Form.Control 
							type="text" 
							placeholder="Enter new author"
							onChange={e => setName(e.target.value)} />
					</Form.Group>
					<Button
						className="me-3"
						variant="secondary"
						type="button"
						as={ Link } to="/">Cancel</Button>
					<Button 
						variant="primary" 
						type="submit" >Submit</Button>
					{
						// * Cuando se presione submit retornara a HOME
						changePage && <Navigate to="/" replace={true} />
					}
				</Form>
			</Col>
			</Row>
		</Container>
		</>
	);
}
