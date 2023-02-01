import DeletePerson from "./components/DeletePerson";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import UpdatePerson from "./components/UpdatePerson";

const Home = () => {
	return (
		<>
			<PersonForm />
			<PersonList />
			<UpdatePerson />
			<DeletePerson />
		</>
	);
}
export default Home;