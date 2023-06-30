import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllAssistance } from "../redux/assistance/thunks";

const fieldObject = {
  option: "names",
  search: "",
};

export const Search = () => {
  const [fields, setFields] = useState(fieldObject);
  const dispatch = useDispatch();

  const fieldHandlerSelect = (event) => {
    const { value } = event.target;
    setFields((state) => {
      return { ...state, option: value };
    });
  };

  const fieldHandler = (event) => {
    const { value } = event.target;
    setFields((state) => {
      return { ...state, search: value };
    });

    console.log({ [fields.option]: fields.search });

    dispatch(getAllAssistance({ [fields.option]: fields.search }));
  };

  return (
    <>
    <div className="col-2">
        <h5>BUSCAR POR</h5>
    </div>
    <div className="col-2">
          <select
            className="form-select"
            name="option"
            value={fields.option}
            onChange={fieldHandlerSelect}
          >
            <option disabled>Tipo de documento...</option>
            <option value="names">Nombres</option>
            <option value="last_names">Apellidos</option>
            <option value="email">Correo electrónico</option>
            <option value="id_number">Numero de identificación</option>
          </select>
    </div>
    <div className="col-2">
        <input
          onChange={fieldHandler}
          type="text"
          value={fields?.search}
          className="form-control"
          placeholder="Busque aqui por nombres, apellidos o identificación"
          name="search"
        />
      </div>
    </>
      
    
  );
};
