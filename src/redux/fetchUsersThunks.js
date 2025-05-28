import { helpHttp } from "../helpers/helpHttp";
import { helpValidateInput } from "../helpers/helpValidateInput";
import { setUsers, setForm, setDataToEdit, setInvalidInput } from "./crudSlice";

const url = "http://localhost:5175/users";

const api = helpHttp;

const initialForm = {
  id: null,
  name: "",
  lastName: "",
};

export const fetchUsersThunks = () => (dispatch, getState) => {
  const users = getState().users;
  const form = getState().form;
  const dataToEdit = getState().dataToEdit;

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

          dispatch(setUsers(newData));
        }
      });
    dispatch(setForm(initialForm));
    dispatch(setDataToEdit(false));
  } else {
    if (helpValidateInput(form.name, form.lastName)) {
      const user = {
        name:
          form.name.charAt(0).toUpperCase() + form.name.slice(1).toLowerCase(),
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
    } else {
      dispatch(setInvalidInput(true));

      setTimeout(() => dispatch(setInvalidInput(false), 2000));
    }
  }
};
