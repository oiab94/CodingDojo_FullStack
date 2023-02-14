import { useRouteError, Link } from "react-router-dom";


export default () => {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<div className="d-flex align-items-center justify-content-center vh-100">
				<div className="text-center row">
					<div className=" mt-5">
						<p className="fs-3">
							<span className="text-danger">Oppss!!</span>Página no encontrada
						</p>
						<p className="lead">La página que busca no existe</p>
						<Link to={"/"} className="btn btn-primary">Go Home</Link>
					</div>
				</div>
			</div>
		</>
	);
}