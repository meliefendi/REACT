//gerekli olan validation paket ve hookları ekledikten sonra;
import validationSchema from "./validations";
import { useFormik } from "formik";


function SignUp() {
    //error mesajı ve bildirimi için hooklar arasına errors hookunu tanımlıyoruz, ardından kullanım kalitesini arttırmak için touched ve handleBlur ekliyoruz. onlarda inputa
    //focus olayından sonra işlemin tamamlanmadığı durumlar için hata mesajı vermek için kullanılmakta. errors, touched tanımlarını aşağıdaki gibi yapıyoruz ve onBlur ile
    // aynı onChange tanımlar gibi onBlur içerisine handleBlur ifadesini ekliyoruz.
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
          initialValues: {        
          email: '',
          password:"",
          confirmPassword:"",
         
        },
        onSubmit: (values) => {
          console.log(values);
        },
         validationSchema,
      });
    return (
        <div>
            <h1> SignUp Page </h1>
            {

                <form onSubmit={handleSubmit}>
                    {/* ///////////////////////// İNPUT /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="jane@acme.com" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} /> <br />
                    {
                        errors.email && touched.email && <div className="errorMessage"> {errors.email} </div>
                    }      <br />

                    <label htmlFor="password">Password</label>
                    <input name="password" placeholder="Password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} /> <br />                 
                    {
                        errors.password && touched.password && <div className="errorMessage"> {errors.password} </div>
                    }  <br />

                    <label htmlFor="confirmPassword">ConfirmPassword</label>
                    <input name="confirmPassword" placeholder="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} /> <br />           
                    {
                        errors.confirmPassword && touched.confirmPassword && <div className="errorMessage"> {errors.confirmPassword} </div>
                    }  <br />

                    <button type="submit">Submit</button> <br /><br />

                    <code> {JSON.stringify(values)} </code>
                </form>


            }
        </div>
    )
}

export default SignUp;