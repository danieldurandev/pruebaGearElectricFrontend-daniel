export const Table = ({ children }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">
            Nombres
          </th>
          <th scope="col">
            Apellidos
          </th>
          <th scope="col">
            Correo electrónico
          </th>
          <th scope="col">
            Teléfono
          </th>
          <th scope="col">
            Tipo de documento
          </th>
          <th scope="col">
            Numero de identificación
          </th>
          <th scope="col">
            ¿Asiste?
          </th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
