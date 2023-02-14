import {
	createBrowserRouter, 
	RouterProvider } from "react-router-dom";
import ErrorPage from "../views/ErrorPage";
import Home from "../views/Home";
import Authors from "../views/AuthorsPage";
import AuthorNew from "../views/AuthorNew";
import AuthorEdit from "../components/AuthorEdit";

const router = createBrowserRouter([
	{
		path:"/",
		errorElement:<ErrorPage />,
		element:<Home />,
		children:[
			{
				path:"/",
				element:<Authors />
			},
			{
				path:"new/",
				element:<AuthorNew />
			},
			{
				path:"edit/",
				element:<AuthorEdit />
			}

		]
	}
]);

export default function Route() {
	return <RouterProvider router={router} />
}