import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";

const GetOneProduct = () => {
	const [product, setProduct] = useState({});
	const id  = useParams().productId;

	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getOneProduct/" + id)
				.then(res => setProduct(res.data))
				.catch(err => console.log(err))
		}
	)

	return (
		<>
			<h1>{product.title}</h1>
			<p>Price: {product.price}</p>
			<p>Description: {product.description}</p>
		</>
	);
}
export default GetOneProduct;