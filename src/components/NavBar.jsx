import { useDispatch, useSelector } from "react-redux";
import { setForm, togleForm } from "../redux/assistance/thunks";
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

  const { total } = useSelector((state) => state.assistance);

  const click = () => {
    dispatch(setForm({ fieldObject, option: "add", button: "AÑADIR" }));
    dispatch(togleForm());
  };

  return (
    <div className="row m-1 d-flex align-items-center">
      <div className="col-1">
        <button className="btn btn-sm btn-primary" onClick={click}>
          AÑADIR
        </button>
      </div>

        <Search/>
      <h3>Asistencia total al evento {total}</h3>
    </div>
  );
};
