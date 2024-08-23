import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPassenger } from "../features/passengers/passengerSlice";

const EditPassenger = () => {
  const [searchRut, setSearchRut] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.passengers.passengers);

  const handleSearch = () => {
    const passenger = passengers.find((p) => p.rut === searchRut);
    if (passenger) {
      setName(passenger.name);
      setLastname(passenger.lastname);
      setBirthdate(passenger.birthdate);
    } else {
      alert("Pasajero no encontrado.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editPassenger({
        rut: searchRut,
        updatedData: { name, lastname, birthdate },
      })
    );
    setSearchRut("");
    setName("");
    setLastname("");
    setBirthdate("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl font-bold mb-4">Modificar Pasajero</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por RUT"
          value={searchRut}
          onChange={(e) => setSearchRut(e.target.value)}
          className="input-field"
          required
        />
        <button type="button" onClick={handleSearch} className="btn-secondary">
          Buscar
        </button>
      </div>
      {name && (
        <>
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
            Guardar Cambios
          </button>
        </>
      )}
    </form>
  );
};

export default EditPassenger;
