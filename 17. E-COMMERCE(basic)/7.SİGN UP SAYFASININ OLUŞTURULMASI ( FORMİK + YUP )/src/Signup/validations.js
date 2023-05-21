
import * as yup from 'yup';

const validations = yup.object().shape({
    email:yup
    .string()
    .email("Geçerli bir mail adresi girin.")
    .required("Zorunlu alan."),
    password:yup
    .string()
    .min(5, "Paralonız en az 5 karakter kadar olmalıdır.")
    .required(),
    passwordConfirm:yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required(),
});

export default validations;