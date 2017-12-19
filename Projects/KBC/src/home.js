import React, { Component } from 'react';
import NewQuestion from './NewQuestion'
import * as firebase from 'firebase';
class home extends Component
{

    constructor(props)
    {
        console.log('constructor')
        super(props);
        this.state = {
            formInput : {
                question :'',
                option1 : '',
                option2 : '',
                option3 : '',
                option4 : ''
            }
        }
       
        
    }
    
componentDidMount(){
    console.log('euvfuve')
    const rootRef = firebase.database().ref().child('question');
    // const speedref  =  rootRef.child('name');
    rootRef.on('child_added',(snap) => {
        // let newData = snap.val();
        console.log(snap.val().option1);
        // console.log(snap.val());
        let getData = this.state.formInput
        getData['question'] = snap.val().question
        getData['option1'] = snap.val().option1
        getData['option2'] = snap.val().option2
        getData['option3'] = snap.val().option3
        getData['option4'] = snap.val().option4;
        // console.log('sfsfsd',getData);

        this.setState({
        formInput : getData   
        })
    });
}
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

<h3>Current Polls</h3>
<label><h6>Question : {this.state.formInput['question']}</h6> </label><br/>
    <label>a<input name='radioGroup'  type='radio' />{this.state.formInput['option1']}</label><br/>
    <label>b<input name='radioGroup'  type='radio' />{this.state.formInput['option2']}</label><br/>
    <label>c<input name='radioGroup'  type='radio' />{this.state.formInput['option3']}</label><br/>
    <label>d<input name='radioGroup'  type='radio' />{this.state.formInput['option4']}</label><br/>

</div>


    )
}



}

export default home 