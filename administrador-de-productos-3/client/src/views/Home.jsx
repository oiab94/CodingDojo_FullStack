import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EditProduct from "./components/EditProduct";
import ProductManager from "./components/ProductManager";

const Home = () =>{
	const router = createBrowserRouter([
			{ path:"/", element: <ProductManager /> },
			{ path:"/:productId/edit", element: <EditProduct /> },
	])


	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
export default Home;