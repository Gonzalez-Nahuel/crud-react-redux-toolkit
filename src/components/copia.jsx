import React, { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";
import { Loader } from "./Loader";
import "../styles/CrudApp.css";
import { ErrorMessage } from "./ErrorMessage";
import { helpValidateInput } from "../helpers/helpValidateInput";

const initialForm = {
  id: null,
  name: "",
  lastName: "",
};

const api = helpHttp();

const url = "http://localhost:5175/users";

export const CrudApp = () => {
  const [form, setForm] = useState(initialForm);
  const [users, setUsers] = useState();
  const [dataToEdit, setDataToEdit] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api.get(url).then((res) => {
      if (!res.error) {
        setUsers(res);
        setError(null);
      } else {
        setUsers(null);
        setError(res);
      }

      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataToEdit) {
      api
        .put(`${url}/${form.id}`, {
          body: { name: form.name, lastName: form.lastName },
        })
        .then((res) => {
          if (!res.error) {
            const newData = users.map((user) =>
              user.id === res.id ? res : user
            );

            setUsers(newData);
          }
        });
      setForm(initialForm);
      setDataToEdit(false);
    } else {
      if (helpValidateInput(form.name, form.lastName)) {
        const user = {
          name:
            form.name.charAt(0).toUpperCase() +
            form.name.slice(1).toLowerCase(),
          lastName:
            form.lastName.charAt(0).toUpperCase() +
            form.lastName.slice(1).toLowerCase(),
        };

        api.post(url, { body: user }).then((res) => {
          if (!res.error) {
            setUsers([...users, res]);
            setForm(initialForm);
          }
        });

        setInvalidInput(false);
      } else {
        setInvalidInput(true);

        setTimeout(() => setInvalidInput(false), 2000);
      }
    }
  };

  const clearForm = () => {
    setForm(initialForm);
    setDataToEdit(false);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Desea eliminar este usuario?");

    if (confirm) {
      api.del(`${url}/${id}`).then((res) => {
        if (!res.error) {
          const newData = users.filter((user) => user.id != id);

          setUsers(newData);
        }
      });
    }
  };

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
