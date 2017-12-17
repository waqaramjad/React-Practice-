import React, { Component } from 'react';

class NewQuestion extends Component
{

submitQuestion(){
console.log('hy')
}



render(){

    return(
<div>
    <label><h3>Input Question</h3><input type='text' /></label><br/>
    <label>a<input name='radioGroup' type='radio' /><input type='text' /></label><br/>
    <label>b<input name='radioGroup' type='radio' /><input type='text' /></label><br/>
    <label>c<input  name='radioGroup'type='radio' /><input type='text' /></label><br/>
    <label>d<input  name='radioGroup'type='radio' /><input type='text' /></label><br/>
    <button onClick={this.submitQuestion}>Submit</button>

</div>


    )
}



}

export default NewQuestion 