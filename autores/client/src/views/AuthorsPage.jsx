import { Table } from "react-bootstrap"
import AuthorDisplay from "../components/AuthorDisplay"

export default function Authors() {
	return(
		<>
		<Table striped bordered hover={true}>
			<thead>
				<tr>
					<th>Author</th>
					<th>Actions avaible</th>
				</tr>
			</thead>
			<tbody>
				{/* 
					Aqui mostrara todos los autores que se encuentra disponible
				*/}
				<AuthorDisplay />
			</tbody>
		</Table> 
		</>
	)
}
