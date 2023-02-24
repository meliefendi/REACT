import Counter from "./Components/Counter"
import { useState } from "react";

function App(){
const [isVisible, setIsVisible] = useState(true);

  return <div className="App">
{ isVisible && <Counter></Counter>}

<button onClick={() => setIsVisible(!isVisible)}>Toogle Button</button>
  
  </div>
}
export default App;

// Elbette, burada diğer React yaşam döngüsü yöntemleri için başka somut örnekler veriyorum:

// constructor(props):
// Bu yöntem, bileşenin oluşturulduğu ilk anda çağrılır ve bileşenin durumunu ve özelliklerini başlatmak için kullanılır. Örneğin:
// javascript
// Copy code
// constructor(props) {
//   super(props);
//   this.state = {
//     count: 0
//   };
// }
// Bu örnekte, bileşenin ilk durumu count 0 olarak ayarlanır.

// componentDidMount():
// Bu yöntem, bileşenin oluşturulduktan sonra DOM'a eklendiğinde çağrılır ve bileşenin başlangıç durumunu yüklemek için kullanılır. Örneğin:
// javascript
// Copy code
// componentDidMount() {
//   fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({ data: data });
//     });
// }
// Bu örnekte, bileşen oluşturulduktan sonra fetch işlevi kullanılarak bir API'den veri alınır ve bileşenin durumu data ile güncellenir.

// shouldComponentUpdate(nextProps, nextState):
// Bu yöntem, bileşenin yeniden render edilip edilmemesi gerektiğini belirlemek için kullanılır. Varsayılan olarak, her zaman true döndürür. Ancak, performansı artırmak için bu yöntemi kullanarak bileşenin gereksiz yeniden render edilmesini önleyebilirsiniz. Örneğin:
// kotlin
// Copy code
// shouldComponentUpdate(nextProps, nextState) {
//   if (this.props.color === nextProps.color && this.state.count === nextState.count) {
//     return false;
//   }
//   return true;
// }
// Bu örnekte, bileşenin color özelliği ve count durumunun değişmediği durumlarda yeniden render edilmesi engellenir.

// getDerivedStateFromProps(props, state):
// Bu yöntem, bileşenin özellikleri veya durumları değiştiğinde çağrılır ve bileşenin yeni durumunu hesaplamak için kullanılır. Örneğin:
// javascript
// Copy code
// static getDerivedStateFromProps(props, state) {
//   if (props.value !== state.value) {
//     return {
//       value: props.value
//     };
//   }
//   return null;
// }
// Bu örnekte, bileşenin özellikleri değiştiğinde value özelliği durumla eşleştirilir.