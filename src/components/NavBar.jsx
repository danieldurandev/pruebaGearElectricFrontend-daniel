import { useDispatch, useSelector } from "react-redux";
import { getAllAssistance, setForm, togleForm } from "../redux/assistance/thunks";
import { Search } from "./Search";

const fieldObject = {
  names: "",
  last_names: "",
  email: "",
  mobile_phone: "",
  type_of_document: "C.C",
  id_number: "",
};

export const NavBar = () => {
  const dispatch = useDispatch();

  const { total, isForm } = useSelector((state) => state.assistance);


  const click = () => {
    dispatch(setForm({ fieldObject, option: "add", button: "AÑADIR" }));
    dispatch(togleForm());
  };

  const getAllRegister = () => {
    dispatch(getAllAssistance({}));
  };

  return (
    <div className="row m-1 p-1 align-items-center">
      <div className="col-4">
        <button className={`btn btn-md btn-${isForm ? "danger" : "primary"}`} onClick={click}>
          {!isForm ? "AÑADIR NUEVO" : "CERRAR"}
        </button>
        <button className="btn btn-md btn-primary" onClick={getAllRegister}>
          TODOS LOS REGISTROS
        </button>
      </div>

      <Search />

      <div className="col-4">
        <h2>ASISTENCIA TOTAL: {total}</h2>
      </div>
    </div>
  );
};
