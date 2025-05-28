export const helpValidateInput = (input1, input2) => {
  const validate = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]{2,30}$/;

  if (validate.test(input1) && validate.test(input2)) {
    return true;
  } else {
    return false;
  }
};
