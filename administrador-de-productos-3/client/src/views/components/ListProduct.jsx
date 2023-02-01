import { useState, useEffect } from "react";
import axios from "axios";

const ListProduct = () => {
	const [products, setProducts] = useState([]);

	// * Obtener todos los datos
	useEffect(
		() => {
			axios.get("http://localhost:8000/api/getProducts")
				.then(res => setProducts(res.data))
		}
	)
	
	// * Eliminar elemento de la BD
	const onClickDelete = (productID) => {
		axios.delete("http://localhost:8000/api/deleteProduct/" + productID)
			.then(res => console.log("Removido"))
	}

	return (
		<>
			<h1>Resultado de la BD</h1>
			{
				products.map(
					(item, index) => {
						return (
							<p key={index}>
                Item: {item.title}, ID: {item._id} 
								<button onClick={e => {onClickDelete(item._id)}}>Eliminar</button>
              </p>
						)}
				)
			}
		</>
	);
}
export default ListProduct;