import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPassenger } from "../features/passengers/passengerSlice";

const AddPassenger = () => {
  const [rut, setRut] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.passengers.passengers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passengers.some((p) => p.rut === rut)) {
      alert("Ya existe un pasajero con este RUT.");
      return;
    }
    dispatch(addPassenger({ rut, name, lastname, birthdate }));
    setRut("");
    setName("");
    setLastname("");
    setBirthdate("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar Pasajero</h2>
      <input
        type="text"
        placeholder="RUT"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        className="input-field"
        required
      />
      <button type="submit" className="btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default AddPassenger;
