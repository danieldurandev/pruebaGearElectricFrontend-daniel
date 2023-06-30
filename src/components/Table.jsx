export const Table = ({ children }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col" className="text-center">
            Nombres
          </th>
          <th scope="col" className="text-center">
            Apellidos
          </th>
          <th scope="col" className="text-center">
            Correo electrónico
          </th>
          <th scope="col" className="text-center">
            Teléfono
          </th>
          <th scope="col" className="text-center">
            Tipo de documento
          </th>
          <th scope="col" className="text-center">
            Numero de identificación
          </th>
          <th scope="col" className="text-center">
            ¿Asiste?
          </th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
