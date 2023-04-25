//3/ githup yup tan import edilme durumu kopylandı. ve sayfa içerisinde kullanılacak veriler sayfaya tanımlandı.
import { object, string,ref } from 'yup';
//React Yup, bir form doğrulama kütüphanesidir. React uygulamalarında sıklıkla kullanılan form doğrulama işlemlerini kolaylaştırmak için oluşturulmuştur.

let Validations = object({
  
  email: string().email().required(),
  password: string().min(5).required(),
  
  //6/ oneOf ile password kontrolü sağlandı.
  confirmPassword: string().oneOf([ref("password")]).required(),

 
});

export default Validations;
