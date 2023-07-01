import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAssistance } from "./redux/assistance/thunks";
import { Table } from "./components/Table";
import { Records } from "./components/Records";
import { Form } from "./components/Form";
import { NavBar } from "./components/NavBar";
import { Loading } from "./components/Loading";


const App = () => {
  const { isForm, isLoading } = useSelector((state) => state.assistance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAssistance({}));
  }, [dispatch]);

  if (isLoading) {
   return <Loading/>
  }

  return (
    <div className="container-fluid text-center">
      <NavBar />
      {isForm && <Form button="AÑADIR" />}
      <Table>
        <Records />
      </Table>
    </div>
  );
};

export default App;
