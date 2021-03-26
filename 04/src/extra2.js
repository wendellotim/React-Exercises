import React from 'react';

import "./box-styles.css";

      
const Box = props => <div style={props.style} className={` box box--${props.size}`}>{props.children}</div>

function Element1 (){
      return(
        <div style={{backgroundColor:'green'}} className='Box'>

            <Box style={{backgroundColor: 'lightblue', fontStyle:'italic'}} size='small'> small lightblue box </Box>

            <Box style={{backgroundColor: 'pink', fontStyle:'italic'}} size='medium'> medium pink box</Box>

            <Box style={{backgroundColor: 'orange', fontStyle:'italic'}} size='large'> large orange box</Box>
        </div>
        )
        }
        export default Element1;
