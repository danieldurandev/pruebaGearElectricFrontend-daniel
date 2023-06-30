import { useDispatch, useSelector } from "react-redux";
import { getAllAssistance, setForm, togleForm } from "../redux/assistance/thunks";
import assistanceApi from "../api/assistanceApi";

export function Records() {
  const { assistants = [], isForm } = useSelector((state) => state.assistance);

  const dispatch = useDispatch();

  const editAssistant = (action, assistance) => {
    const fieldObject = assistance;
    dispatch(setForm({ fieldObject, action, button: "ACTUALIZAR" }));
    if(!isForm)
      dispatch(togleForm());
  };

  const deleteAssistant = async (id) => {
    await assistanceApi.delete(id)
    dispatch(getAllAssistance({}))
  }

  const togleAssistant = async (id, is_active) => {
    await assistanceApi.patch(id, {is_active: !is_active})
    dispatch(getAllAssistance({}))
  }

  return (
    <>
      {assistants.map((assistant) => (
        <tr key={assistant.id}>
          <td>{assistant.names}</td>
          <td>{assistant.last_names}</td>
          <td>{assistant.email}</td>
          <td>{assistant.mobile_phone}</td>
          <td>{assistant.type_of_document}</td>
          <td>{assistant.id_number}</td>
          <td>{assistant.is_active ? "SI" : "NO"}</td>
          <td>
            <button
              className="btn btn-sm btn-primary"
              name="edit"
              onClick={(event) => {
                event.preventDefault();
                editAssistant(event.target.name, assistant);
              }}
            >
              EDITAR
            </button>
            <button
              className={`btn btn-sm btn-${
                assistant.is_active ? "warning" : "success"
              }`}
              name="toggle" onClick={(event) => {
                event.preventDefault();
                togleAssistant(assistant.id, assistant.is_active);
              }}
            >
              {assistant.is_active ? "INHABILITAR" : "HABILITAR"}
            </button>
            <button className="btn btn-sm btn-danger" name="delete"  onClick={(event) => {
                event.preventDefault();
                deleteAssistant(assistant.id);
              }}>
              ELIMINAR
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
