import { useSelector } from "react-redux";

const PassengerList = () => {
  const { passengers, capacity } = useSelector((state) => state.passengers);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Pasajeros</h2>
      <ul>
        {passengers.map((passenger, index) => (
          <li key={index} className="border-b py-2">
            {`${index + 1}. ${passenger.name} ${
              passenger.lastname
            } - Edad: ${calculateAge(passenger.birthdate)} años`}
          </li>
        ))}
        {Array.from({ length: capacity - passengers.length }).map(
          (_, index) => (
            <li
              key={index + passengers.length}
              className="border-b py-2 text-gray-500"
            >
              Asiento vacío
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export default PassengerList;
