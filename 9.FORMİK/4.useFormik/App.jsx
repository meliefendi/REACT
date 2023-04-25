
import "./App.css";
//burada formik ile oluşturduğumuz yapıyı useFormik ile daha sade ve useState tarzında oluşturuyoruz. useFormik'in avantajı tüm yardımcı nesneleri içerisinde barındırmasıdır.
//handleSubmit, handleChange, values yardımcı nesneleri
import { useFormik } from "formik";

function App() {

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      hobbies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

  });


  return (
    <div className="App">

      <h1>Sign Up</h1>

      {

        <form onSubmit={handleSubmit}>
          {/* ///////////////////////// İNPUT /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="Jane" value={values.firstName} onChange={handleChange} /> <br /><br />

          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="Doe" value={values.lastName} onChange={handleChange} /> <br /><br />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="jane@acme.com" type="email" value={values.email} onChange={handleChange} /> <br /><br />

          {/* ////////////////////////////// RADİO ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <span>Male </span>
          <input name="gender" type="radio" value="male" onChange={handleChange} checked={values.gender === "male"} />

          <span> Female </span>
          <input name="gender" type="radio" value="female" onChange={handleChange} checked={values.gender === "female"} /> <br /><br />

          {/* ////////////////////////////////// CHECKBOX ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div>
            <input type="checkbox" name="hobbies" value="Football" onChange={handleChange} />
            Football
          </div>

          <div>
            <input type="checkbox" name="hobbies" value="Swim" onChange={handleChange} />
            Swim
          </div>

          <div>
            <input type="checkbox" name="hobbies" value="Computer Gameplay" onChange={handleChange} />
            Computer Gameplay
          </div> <br />

          {/* ///////////////////////////////////// DROPDOWN /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <select name="country" value={values.country} onChange={handleChange}>
            <option hidden value="select">--Select--</option>
            <option value="Turkey">Turkey</option>
            <option value="Abd">Abd</option>
            <option value="England">England</option>
          </select><br /><br />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <button type="submit">Submit</button> <br /><br />

          <code> {JSON.stringify(values)} </code>
        </form>


      }
    </div>
  )
}

export default App;