export const EmployeeCard = ({ employee }: any) => {
  return (
    <div>
      <h3>id: {employee.id}</h3>
      <p>name: {employee.name}</p>
    </div>
  );
};

export default EmployeeCard;
