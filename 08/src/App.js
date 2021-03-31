import * as React from "react";
import { useLocalStorageState } from "use-local-storage-state";

function Greeting({ initialName = "" }) {
    const [key, setKey] = React.useState("name");
    const [name, setName] = useLocalStorageState(key, initialName);

    function handleClick() {
        if (key === "name") {
            setKey("firstName");
        } else if (key === "firstName") {
            setKey("Name");
        } else {
            setKey("name");
        }
    }
    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
                <button onClick={handleClick} type="button">
                Change name
                </button>
            </form>
            {name ? <strong>Hello {name}</strong> : "Please type your name"}
        </div>
    );
}

function App() {
    return <Greeting />;
}

export default App;