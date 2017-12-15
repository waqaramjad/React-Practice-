import React, { Component } from 'react';


function Analogeclock(props)
{
console.log(props)

let time = new Date(props.time)

let clockContainer = {
    position: 'relative',
    top: 0,
    left : 0,
    border : '1px solid red',
    width : 200,
    height: 200,

bordreRadius : 20000,
borderStyle : 'solid ',
    backgroundColor: 'black'
}

let Hourhand = {
    position: 'relative',
    
    top: 92,
    left : 106 , 
    border : '1px solid gray',
    width : '20%',
    height: 7,
    transform:  'rotate ('+((time.getHours()/12)*360-90).toString()+'+deg)',
    transformOrigin :'0% 0%' ,
    backgroundColor: 'grey'

}
let Minutehand = {
    position: 'relative',
    top: 100,
    left : 100, 
    border : '1px solid gray',
    width : '40%',
    height: 3,
    transform:  'rotate ('+((time.getMinutes()/60)*360-90).toString()+'+deg)',
    transformOrigin :'0% 0%' ,
    backgroundColor: 'grey'
}
let Secondhand = {
    position: 'relative',
    top: 100,
    left : 100,
    border : '1px solid red',
    width : '40%',
    height: 1,
    transform:  'rotate ('+((time.getSeconds()/60)*360-90).toString()+'+deg)',
    transformOrigin :'0% 0%' ,
    backgroundColor: 'red'
}

return(
    <div style={clockContainer}>

    <div style={Secondhand}></div>
    <div style={Minutehand}></div>
    <div style={Hourhand}></div>

</div>
)
// {/* <h1>Analge Clock </h1> */}
// );






}

export default Analogeclock ;