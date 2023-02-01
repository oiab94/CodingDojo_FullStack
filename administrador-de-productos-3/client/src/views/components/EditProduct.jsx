import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const EditProduct = () => {
	const id = useParams().productId;
	const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [description, setDescription] = useState();

	// * Obtener los datos del producto
	useEffect(
		() => {
			console.log(id);
			axios.get("http://localhost:8000/api/getOneProduct/" + id)
				.then(
					res => {
						setTitle(res.data.title);
						setPrice(res.data.price);
						setDescription(res.data.description);
				})
				.catch(err => console.log("no se recupero los datos"))
		}, []
	);

	// * Al enviar actualizamos los datos cambiados
	const onSubmitHandler = e => {
		e.preventDefault();
		axios.put(
			"http://localhost:8000/api/updateProduct/" + id,
			{title, price, description})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<div>
			<h1>Edición Producto: {id}</h1>
			<form onSubmit={onSubmitHandler}>
				<p>
					<label>Title</label>
					<input 
						type="text"
						name="title"
						onChange={e => setTitle(e.target.value)} />
				</p>
				<p>
					<label>Price</label>
					<input 
						type="text"
						name="price" 
						onChange={e => setPrice(e.target.value)}/>
				</p>
				<p>
					<label>Description</label>
					<input 
						type="text"
						name="description"
						onChange={e => setDescription(e.target.value)} />
				</p>
				<input type="submit" value="Change" />
			</form>
		</div>
	);
}
export default EditProduct;