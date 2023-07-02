
import * as yup from 'yup';

const validations = yup.object().shape({
    email:yup
    .string()
    .email("geçerli bir mail girin.")
    .required("zorunlu alan."),
    password:yup
    .string()
    .min(4, "parolanız en az 4 karakter olmalı")
    .required(),
});

export default validations;
