import React from "react";
import { useDispatch } from "react-redux";
import { setDataToEdit, setForm } from "../redux/crudSlice";

export const TableRow = ({ id, name, lastName, handleDelete }) => {
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(
      setForm({
        id,
        name,
        lastName,
      })
    );
    dispatch(setDataToEdit(true));
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
