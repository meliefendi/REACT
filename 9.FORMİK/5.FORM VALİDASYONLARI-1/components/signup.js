
//2/sade ve anlaşılır olması için sayfa yapıları ayrıldı.validation bu sayfaya import edildi.
import validationSchema from "./validations";
import { useFormik } from "formik";


function SignUp() {
    const { handleSubmit, handleChange, values } = useFormik({
        //5/validatıon sayfasındaki veriler burasıyla eşleşmekte
        initialValues: {        
          email: '',
          password:"",
          confirmPassword:"",
         
        },
        onSubmit: (values) => {
          console.log(values);
        },
        //4/ ayrıca validationShema özel terim kullanarak yapıldı. istersek validation :validationShema şeklinde yapılırdı.
        validationSchema,
      });
    return (
        <div>
            <h1> SignUp Page </h1>
            {

                <form onSubmit={handleSubmit}>
                    {/* ///////////////////////// İNPUT /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="jane@acme.com" type="email" value={values.email} onChange={handleChange} /> <br /><br />        

                    <label htmlFor="password">Password</label>
                    <input name="password" placeholder="Password" type="password" value={values.password} onChange={handleChange} /> <br /><br />                   


                    <label htmlFor="confirmPassword">ConfirmPassword</label>
                    <input name="confirmPassword" placeholder="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} /> <br /><br />             
                    
                    <button type="submit">Submit</button> <br /><br />

                    <code> {JSON.stringify(values)} </code>
                </form>


            }
        </div>
    )
}

export default SignUp;