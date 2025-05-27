import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import "../styles/CrudApp.css";
import { ErrorMessage } from "./ErrorMessage";
import { useCrud } from "../hooks/useCrud";

export const CrudApp = () => {
  const {
    form,
    setForm,
    handleSubmit,
    clearForm,
    invalidInput,
    error,
    users,
    setDataToEdit,
    handleDelete,
    isLoading,
  } = useCrud();

  return (
    <div className="crud-container">
      <CrudForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
      />
      {invalidInput && (
        <p style={{ color: "red", padding: "1rem" }}>
          Nombre o Apellido invalido
        </p>
      )}
      <div className="table-container">
        {error && <ErrorMessage error={error} />}
        {users && (
          <CrudTable
            users={users}
            form={form}
            setForm={setForm}
            error={error}
            setDataToEdit={setDataToEdit}
            handleDelete={handleDelete}
          />
        )}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};
