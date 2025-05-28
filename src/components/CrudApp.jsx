import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import "../styles/CrudApp.css";
import { ErrorMessage } from "./ErrorMessage";
import { useCrud } from "../hooks/useCrud";
import { useSelector } from "react-redux";

export const CrudApp = () => {
  const { invalidInput, error, users, isLoading } = useSelector(
    (state) => state.crud
  );
  const { handleSubmit, clearForm, handleDelete } = useCrud();

  return (
    <div className="crud-container">
      <CrudForm handleSubmit={handleSubmit} clearForm={clearForm} />
      {invalidInput && (
        <p style={{ color: "red", padding: "1rem" }}>
          Nombre o Apellido invalido
        </p>
      )}
      <div className="table-container">
        {error && <ErrorMessage />}
        {users && <CrudTable handleDelete={handleDelete} />}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};
