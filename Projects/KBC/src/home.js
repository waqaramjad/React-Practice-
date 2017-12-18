import React, { Component } from 'react';
import NewQuestion from './NewQuestion'
class home extends Component
{
// test1(){
//     console.log('jdfs')
// }

createNew(){

this.props.history.push('/newquestion');
}


render(){

    return(
<div>
<button onClick={this.createNew.bind(this)}>Create New Question</button>
{/* <button onClick={}>Login</button> */}
        <h1>home</h1>
        /* <button onClick={this.test1}></button> */

</div>


    )
}



}

export default home 