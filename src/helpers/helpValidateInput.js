export const helpValidateInput = (input1, input2) => {
    const validate = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]{2,30}$/;

    const firsInput = input1.charAt(0).toUpperCase() + input1.slice(1).toLowerCase();
    const secondInput = input2.charAt(0).toUpperCase() + input2.slice(1).toLowerCase();

    if (validate.test(firsInput) && validate.test(secondInput)) {
        return true;
    } else {
        return false;
    };
};