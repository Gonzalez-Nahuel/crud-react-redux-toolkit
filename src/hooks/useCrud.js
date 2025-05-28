import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { helpValidateInput } from "../helpers/helpValidateInput";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../redux/usersThunks";
import {
  setForm,
  setDataToEdit,
  setInvalidInput,
  setIsLoading,
} from "../redux/crudSlice";

const initialForm = {
  id: null,
  name: "",
  lastName: "",
};

const url = "http://localhost:5175/users";

export const useCrud = () => {
  const dispatch = useDispatch();
  const { dataToEdit, form } = useSelector((state) => state.crud);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setIsLoading(true));

      await dispatch(getUsers(url));

      dispatch(setIsLoading(false));
    };

    fetchUsers();
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataToEdit) {
      dispatch(updateUser(url));
    } else {
      if (helpValidateInput(form.name, form.lastName)) {
        dispatch(createUser(url));
      } else {
        dispatch(setInvalidInput(true));

        setTimeout(() => dispatch(setInvalidInput(false)), 2000);
      }
    }
  };

  const clearForm = () => {
    dispatch(setForm(initialForm));
    dispatch(setDataToEdit(false));
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Desea eliminar este usuario?");

    if (confirm) {
      dispatch(deleteUser(url, id));
    }
  };

  return {
    handleSubmit,
    clearForm,
    handleDelete,
  };
};
