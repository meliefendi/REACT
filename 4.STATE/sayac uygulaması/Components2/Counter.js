
import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count + 1);
    }

    const Decrease = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={Decrease}>Decrease</button>
            
            {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}

            <button onClick={Increase}>Increase</button>

            {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}

        </div>
    )
}

export default Counter;

//BAŞLAMADAN ÖNCE BU SAYFAYI İMPORT ETTİK. İNDEX.JS ÜZERİNDE. DAHA SONRA SAYAÇ YAPTIK. 2 FARKLI ŞEKİLDE.