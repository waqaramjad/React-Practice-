// import React , {Component} from './react';
import React, { Component } from 'react';
let a =0 ;
function clickNumber()
{
console.log('click by outer no',a++)
}


class Myevents extends Component
{

render()
{
    return(
        <div>
            <h1>Events </h1>
            <button onClick={clickNumber}>Click It </button>
            <button onClick={function(){console.log('click by inner no',a++)
}}>Click Itinner function </button>
            
            </div>
    )
}

}
export default Myevents;
