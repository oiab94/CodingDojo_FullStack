import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import GetOneProduct from "../views/components/GetOneProduct";

const Root = () => {
	const router = createBrowserRouter([
		{ path:"/", element:<Home /> },
		{ path:"/:productId", element:<GetOneProduct />}
	])

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
export default Root;