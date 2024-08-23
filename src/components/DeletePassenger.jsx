import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePassenger } from "../features/passengers/passengerSlice";

const DeletePassenger = () => {
  const [rut, setRut] = useState("");
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.passengers.passengers);

  const handleDelete = () => {
    const passenger = passengers.find((p) => p.rut === rut);
    if (passenger) {
      if (
        window.confirm(
          `¿Seguro que deseas eliminar a ${passenger.name} ${passenger.lastname}?`
        )
      ) {
        dispatch(deletePassenger(rut));
        setRut("");
      }
    } else {
      alert("Pasajero no encontrado.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Eliminar Pasajero</h2>
      <input
        type="text"
        placeholder="RUT del pasajero"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        className="input-field"
        required
      />
      <button onClick={handleDelete} className="btn-danger">
        Eliminar
      </button>
    </div>
  );
};

export default DeletePassenger;
