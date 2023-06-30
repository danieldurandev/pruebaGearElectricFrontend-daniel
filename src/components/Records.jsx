import { useDispatch, useSelector } from "react-redux";
import { getAllAssistance, setForm, togleForm } from "../redux/assistance/thunks";
import assistanceApi from "../api/assistanceApi";

export function Records() {
  const { assistants, isForm } = useSelector((state) => state.assistance);

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
          <td className="text-center">{assistant.names}</td>
          <td className="text-center">{assistant.last_names}</td>
          <td className="text-center">{assistant.email}</td>
          <td className="text-center">{assistant.mobile_phone}</td>
          <td className="text-center">{assistant.type_of_document}</td>
          <td className="text-center">{assistant.id_number}</td>
          <td className="text-center">{assistant.is_active ? "SI" : "NO"}</td>
          <td className="text-center">
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
