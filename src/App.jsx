import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssistance } from "./redux/assistance/thunks";
import { Table } from "./components/Table";
import { Records } from "./components/Records";
import { Form } from "./components/Form";
import { Search } from "./components/Search";
import { NavBar } from "./components/NavBar";


const App = () => {
  const { isForm } = useSelector((state) => state.assistance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAssistance({}));
  }, [dispatch]);

  return (
    <div className="container-fluid text-center">
      <NavBar/>
      {isForm && <Form button="AÑADIR" />}      
      <Table>
        <Records />
      </Table>
    </div>
  );
};

export default App;
