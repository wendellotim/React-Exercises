import React, { useState } from "react";


function Greeting(initialName) {
    
    const [initialName, setName] = useState();

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} id="name" />
            </form>
            {initialName.name ? <strong>Hello {initialName.name}</strong> : "Please type your name"}
        </div>
    );
}

function App() {
    return <Greeting  />;
}

export default App;