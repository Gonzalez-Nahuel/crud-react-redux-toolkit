import React from "react";

export const TableRow = ({
  id,
  name,
  lastName,
  setForm,
  setDataToEdit,
  handleDelete,
}) => {
  const edit = () => {
    setForm({
      id,
      name,
      lastName,
    });
    setDataToEdit(true);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>
        <button className="btn crud-table__btn-editar" onClick={edit}>
          Editar
        </button>
        <button
          className="btn crud-table__btn-eliminar"
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
