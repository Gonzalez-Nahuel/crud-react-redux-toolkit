import { createSlice } from "@reduxjs/toolkit";

const initialForm = {
  id: null,
  name: "",
  lastName: "",
};

const initialState = {
  form: initialForm,
  users: null,
  dataToEdit: false,
  error: null,
  isLoading: false,
  invalidInput: false,
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    setForm(state, action) {
      state.form = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setDataToEdit(state, action) {
      state.dataToEdit = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setInvalidInput(state, action) {
      state.invalidInput = action.payload;
    },
  },
});

export const {
  setDataToEdit,
  setError,
  setForm,
  setInvalidInput,
  setIsLoading,
  setUsers,
} = crudSlice.actions;
export default crudSlice.reducer;
