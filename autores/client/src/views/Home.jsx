import {
	Container,
	Nav,
	Navbar
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/" className="fs-3">Favorite Authors</Navbar.Brand>
				<Nav className="me-auto" onSelect={e => console.log(e)}>
					{/* Con "as" le decimos a react-bootstrap que queremos utilizar nuestro componente (leer documentacion API) */}
					<Nav.Link className="fs-4"
						as={Link} to={"/"} >Home</Nav.Link>
					<Nav.Link className="fs-4"
						as={Link} to={"new/"} >Add an author</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

			{/* Los hijos que se han puesto en el router se renderizaran aqui */}
		<Container>	
			<Outlet />
		</Container>
		</>
	);
}
