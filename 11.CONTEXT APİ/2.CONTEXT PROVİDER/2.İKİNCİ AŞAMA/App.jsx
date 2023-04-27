
import Button from "./Components/button";
import Header from "./Components/header";

import { ThemeProvider } from "./Context/context";


function App() {
  return (
    <div>

      <ThemeProvider>
      <Header/>
      <hr/>
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App;