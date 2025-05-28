import React from "react";
import "../styles/CrudForm.css";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/crudSlice";
import { useCrud } from "../hooks/useCrud";

export const CrudForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.crud);
  const { handleSubmit, clearForm } = useCrud();

  const handleForm = (e) => {
    dispatch(
      setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
    );
  };

  return (
    <div className="crud-form__container">
      <form className="crud-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleForm}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={form.lastName}
          onChange={handleForm}
        />
        <div>
          <button className="btn">Enviar</button>
          <button
            className="btn crud-form__btn-limpiar"
            type="button"
            onClick={clearForm}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};
