import { 
	createBrowserRouter, 
	RouterProvider } from "react-router-dom";
import PersonDetail from "../views/components/PersonDetail";
// *Importación de las rutas
import Home from "../views/Home"

const Root = () => {
	const allRoutes = createBrowserRouter([
		// * Aqui vemos como acceder a las páginas
		{ path:"/", element: <h1>Escriba /people</h1>},
		{ path:"/people", element: <Home /> },
		{ 
			path:"/people/:id", 
			element:<PersonDetail />,
		}
	])

	return (
		<>
			<RouterProvider router={allRoutes} />
		</>
	);
}
export default Root;