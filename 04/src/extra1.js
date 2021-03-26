import React from 'react';
import "./box-styles.css";

const Box = props => <div style={props.style} className={props.className}>{props.children}</div>

function Element(){
      return(
        <div style={{backgroundColor:'green'}} className='Box'>

            <Box style={{backgroundColor: 'lightblue', fontStyle:'italic'}} className='box--small'> small lightblue box </Box>

            <Box style={{backgroundColor: 'pink', fontStyle:'italic'}} className='box--medium'> medium pink box</Box>

            <Box style={{backgroundColor: 'orange', fontStyle:'italic'}} className='box--small'> large orange box</Box>
        </div>)
        
}
        export default Element;
