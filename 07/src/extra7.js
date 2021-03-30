import React, { useState } from "react";


function Greeting(props) {
    
    const [name, setName] = useState(props.initialName);

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : "Please type your name"}
        </div>
    );
}

function App() {
    return <Greeting  />;
}

export default App;