
import React, { useState } from "react";

const defaultItem = [
    {
        name:"Item 1"
    },
    {
        name:"Item 2"
    },
    {
        name:"Item 3"
    },
];

function Todo() {
    const [text, setText] = useState("");
    const [items, setItem] = useState(defaultItem);

    
    const addItem = (e) => {

        setItem((items) => [...items, { name: text }]);
        setText("")
    }
    return (
        <div>
            <h1>Todo-List Components</h1>

            <div>
                <label>Text <br />
                    <input value={text} onChange={(e) => setText(e.target.value)} ></input>
                </label>
            </div><br />
            <div>
                <button type="submit" onClick={addItem}>Add</button>
            </div> <br />
            {
                items.map((item, key) => (
                    <div key={key}> {item.name} </div>
                ))
            }

        </div>
    )
}

export default Todo;