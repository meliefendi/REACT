//3/ githup yup tan import edilme durumu kopylandı. ve sayfa içerisinde kullanılacak veriler sayfaya tanımlandı.
import { object, string,ref } from 'yup';


let Validations = object({
  
  email: string().email().required(),
  password: string().min(5).required(),
  
  //6/ oneOf ile password kontrolü sağlandı.
  confirmPassword: string().oneOf([ref("password")]).required(),

 
});

export default Validations;