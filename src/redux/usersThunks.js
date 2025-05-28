import { helpHttp } from "../helpers/helpHttp";
import {
  setError,
  setUsers,
  setForm,
  setDataToEdit,
  setInvalidInput,
} from "./crudSlice";

const api = helpHttp();

const initialForm = {
  id: null,
  name: "",
  lastName: "",
};

export const getUsers = (url) => async (dispatch) => {
  const res = await api.get(url);

  if (!res.error) {
    dispatch(setUsers(res));
    dispatch(setError(null));
  } else {
    dispatch(setUsers(null));
    dispatch(setError(res));
  }

  return res;
};

export const updateUser = (url) => (dispatch, getState) => {
  const users = getState().crud.users;
  const form = getState().crud.form;

  api
    .put(`${url}/${form.id}`, {
      body: { name: form.name, lastName: form.lastName },
    })
    .then((res) => {
      if (!res.error) {
        const newData = users.map((user) => (user.id === res.id ? res : user));
        dispatch(setUsers(newData));
      }
    });
  dispatch(setForm(initialForm));
  dispatch(setDataToEdit(false));
};

export const createUser = (url) => (dispatch, getState) => {
  const form = getState().crud.form;
  const users = getState().crud.users;

  const user = {
    name: form.name.charAt(0).toUpperCase() + form.name.slice(1).toLowerCase(),
    lastName:
      form.lastName.charAt(0).toUpperCase() +
      form.lastName.slice(1).toLowerCase(),
  };
  api.post(url, { body: user }).then((res) => {
    if (!res.error) {
      dispatch(setUsers([...users, res]));
      dispatch(setForm(initialForm));
    }
  });
  dispatch(setInvalidInput(false));
};

export const deleteUser = (url, id) => (dispatch, getState) => {
  const users = getState().crud.users;

  api.del(`${url}/${id}`).then((res) => {
    if (!res.error) {
      const newData = users.filter((user) => user.id != id);

      dispatch(setUsers(newData));
    }
  });
};
