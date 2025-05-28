import React from "react";
import { TableRow } from "./TableRow";
import "../styles/CrudTable.css";
import { useSelector } from "react-redux";

export const CrudTable = ({ handleDelete }) => {
  const { users } = useSelector((state) => state.crud);
  return (
    <div className="crud-table__container">
      <table className="crud-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow
                key={user.id}
                id={user.id}
                name={user.name}
                lastName={user.lastName}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                No Hay Datos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
