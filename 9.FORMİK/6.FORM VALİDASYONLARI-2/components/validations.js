import { object, string,ref } from 'yup';


let Validations = object({
  
  //isteğe bağlı olarak özelleştirmeler yapıyoruz.
  email: string().email("geçerli bir mail adresi girin").required("bu alan zorunludur"),
  password: string().min(5,"parolanız en az 5 karakter olmalıdır.").required("bu alan zorunludur"),
  confirmPassword: string().oneOf([ref("password"),"parolalar uyuşmuyor"]).required("bu alan zorunludur"),

 
});

export default Validations;