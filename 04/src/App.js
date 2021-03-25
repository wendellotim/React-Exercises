import * as React from "react";
import "./box-styles.css";

const smallBox = <div className='box--small' style={{backgroundColor:'lightblue', fontStyle:'italic'}}>small lightblue box</div>;
const mediumBox = <div className='box--medium' style={{backgroundColor:'pink',fontStyle:'italic'}}>medium pink box</div>;
const largeBox = <div className='box--small' style={{backgroundColor:'orange', fontStyle:'italic'}}>large orange box</div>;



function App() {
    return (
        <div className='box' style={{backgroundColor:'green'}}>
            {smallBox}
            {mediumBox}
            {largeBox}
        </div>
    );
}

export default App;
