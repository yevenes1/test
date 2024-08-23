import PassengerList from "./components/PassengerList";
import AddPassenger from "./components/AddPassenger";
import EditPassenger from "./components/EditPassenger";
import DeletePassenger from "./components/DeletePassenger";

const App = () => {
  return (
    <div className="container mx-auto">
      <AddPassenger />
      <PassengerList />
      <EditPassenger />
      <DeletePassenger />
    </div>
  );
};

export default App;
