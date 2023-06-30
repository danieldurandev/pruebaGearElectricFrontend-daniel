import { useEffect, useState } from "react";
import assistanceApi from "../api/assistanceApi";
import { fieldsValidation } from "../helpers/fieldsValidation";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssistance } from "../redux/assistance/thunks";

export function Form() {
  const { fieldObject, option, button } = useSelector(
    (state) => state.assistance
  );
  const [fields, setFields] = useState(fieldObject);
  const [errors, setErrors] = useState(fieldObject);

  const dispatch = useDispatch();

  useEffect(() => {
    setFields(fieldObject);
  }, [fieldObject]);

  const fieldHandler = (event) => {
    const { name, value } = event.target;
    let isValidated = true;

    if (name === "names" || name === "last_names")
      if (value.length > 100) isValidated = false;

    if (name === "id_number")
      if (value.length > 30 || !/^(\d+)?$/.test(value)) isValidated = false;

    if (name === "mobile_phone")
      if (value.length > 10 || !/^(\d+)?$/.test(value)) isValidated = false;

    if (isValidated)
      setFields((state) => ({
        ...state,
        [name]: value,
      }));
  };

  const sendForm = async (event) => {
    event.preventDefault();
    const isValidated = fieldsValidation(fields);
    console.log(fieldObject.id);
    try {
      if (!isValidated.err) {
        if (option === "add") await assistanceApi.post("", fields);
        else {
          delete fields.id;
          await assistanceApi.patch(fieldObject.id, fields);
        }
        dispatch(getAllAssistance({}));
      }
      setErrors(isValidated);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row m-2 p-1 align-items-center">
      <form className="row" onSubmit={sendForm}>
        
        <div className="col-12">
          <h5>DATOS DEL ASISTENTE</h5>
        </div>

        <div className="col-6 mt-3">
          <input
            onChange={fieldHandler}
            type="text"
            value={fields?.names}
            className="form-control"
            placeholder="Nombres"
            name="names"
          />
        </div>

        <div className="col-6 mt-3">
          <input
            onChange={fieldHandler}
            type="text"
            value={fields?.last_names}
            className="form-control"
            placeholder="Apellidos"
            name="last_names"
          />
        </div>

        <div className="col-6 mt-3">
          <input
            onChange={fieldHandler}
            type="text"
            value={fields?.email}
            className="form-control"
            placeholder="Correo electrónico"
            name="email"
          />
        </div>
        <div className="col-6 mt-3">
          <input
            onChange={fieldHandler}
            type="text"
            value={fields?.mobile_phone}
            className="form-control"
            placeholder="Numero de teléfono"
            name="mobile_phone"
          />
        </div>

        <div className="col-4 mt-3">
          <select
            className="form-select"
            onChange={fieldHandler}
            name="type_of_document"
            value={fields?.type_of_document}
          >
            <option disabled>Tipo de documento...</option>
            <option value="C.C">C.C</option>
            <option value="C.E">C.E</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="col-8 mt-3">
          <input
            onChange={fieldHandler}
            type="text"
            value={fields?.id_number}
            className="form-control"
            placeholder="Numero de identificación"
            name="id_number"
          />
        </div>

        <div className="col mt-3">
          <button type="submit" className="btn btn-md btn-success">
            {button}
          </button>
        </div>
      </form>
    </div>
  );
}
