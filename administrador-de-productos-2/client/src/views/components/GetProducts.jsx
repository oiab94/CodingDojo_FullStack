import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const GetProducts = () => {
	const [products, setProducts] = useState([]);

	// * Obtener los productos de la DB
	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getProducts")
			.then(res => setProducts(res.data))
			.catch(err => console.log("Ocurrio un error"))
		}, []
	);

	return (
		<div>
			<h1>All Products</h1>
			<ul>
			{
				products.map(
					(item, index) => {
						return (
								<li key={index}>
									<Link to={item._id}>{item.title}</Link>
								</li>
						)}
				)
			}
			</ul>
		</div>
	);
}
export default GetProducts;