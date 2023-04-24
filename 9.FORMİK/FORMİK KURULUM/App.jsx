//yarn ile güncel formik kurulumu yapılmıştır.

import "./App.css";
//kullanılacak formik hooklarının tanımını yaptık. 
import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>

      <Formik
      //bu kısım state'deki varsayılan verilen değere karşılık geliyor.
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}

        onSubmit={ (values) => {
              alert(JSON.stringify(values, null, 2));
        }}

      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          {/* fieldlar inputlara karşılık gelmekte */}
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App;