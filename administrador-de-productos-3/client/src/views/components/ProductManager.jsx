import { useEffect, useState } from 'react';
import axios from 'axios';
import ListProduct from './ListProduct';

const ProductManager = () => {
	const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
		axios.post(
			"http://localhost:8000/api/newProduct",
			{title, price, description})
			.then(res => console.log("Response: ", res))
			.catch(err => console.log("Error: ", err))
  }

  useEffect (
    () => {
      axios.get("http://localhost:8000/api/getProducts")
      .then(res => setProducts(res.data))
    }
  )

	return (
		<>
			<h1>Product Manager</h1>
			<form onSubmit={onSubmitHandler}>
        <p>
        <label>Title</label>
        <input 
          type="text"
          onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <input 
            type="text"
            onChange={e => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <input 
            type="text"
            onChange={e => setDescription(e.target.value)} />
        </p>
        <input 
        type="submit" 
        value="Create"/>
      </form>
      <ListProduct />
		</>
	);
}
export default ProductManager;