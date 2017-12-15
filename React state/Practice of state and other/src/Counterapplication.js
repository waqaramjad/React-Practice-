// import React,{ Component } from "react";
import React, { Component } from 'react';

class Counterapplication extends Component
{

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     }

    //     // this.incrementCounter = this.incrementCounter.bind(this);
    //     // this.incrementCounter = this.incrementCounter.bind(this);
    //     // this.decrementCounter = this.decrementCounter.bind(this);

    // }

    // // clickHander() {
    // //     console.log('click pressed');
    // // }

    // incrementCounter() {
    //     // console.log(ev, 'ev');
    //     // console.log(param, 'parama');
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    // // incrementCounter() {
    // //     // console.log('increment');
    // //     if (this.state.counter < 11) {
    // //         this.setState({ counter: this.state.counter + 1 });
    // //     }
    // //     else{
    // //         console.log('already reached maximum count');
            
    // //     }
    // // }
    // // decrementCounter() {
    // //     // console.log('decrement');
    // //     if (this.state.counter === 0) {
    // //         console.log('already reached minimum count');
    // //     }
    // //     else {
    // //         this.setState({ counter: this.state.counter - 1 });
    // //     }
    // // }


    // render() {
    //     return (

    //         <div>

    //             {/* <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} /> */}



    //             {/* <h1>Hello Events</h1>
    //             {/* <button onClick={function () {
    //                 console.log('first button');
    //             }}>First Button</button> */}

    //             {/* <button onClick={this.clickHander}>Second Button</button> */}

    //             <button onClick={this.incrementCounter.bind(this)}>+</button>
    //             {/* {<button onClick={this.incrementCounter.bind(this, 'Hello')}>+</button> */} */}

    //             <span>{this.state.counter}</span>

    //             {/* <button onClick={this.incrementCounter.bind(this, 'Events')}>+</button>  */}


    //         </div>
    //     )
    // }





// constructor(props)
// {
// super(props);
// this.state = {
//     counter : 1
// }
 constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.update = this.update.bind(this);
console.log( this.state.counter );

// this.update()
}

update(a,ev)
{
    console.log(`ev`,this)
    console.log(`a`,a)
    this.setState  ({
        
       
        counter : this.state.counter +1
    })

console.log( this.state.counter );

}

// incrementCounter() {
//         // console.log(ev, 'ev');
//         // console.log(param, 'parama');
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }
render()
{
    
    

    console.log( this.state.counter );
    return(
        <div>
            <button onClick={this.update.bind(this , 'wiki')}> + </button>
            {/* <button onClick={this.incrementCounter.bind(this)}> + </button> */}
            <span>{this.state.counter}</span>

        </div>

)
}

}

export default Counterapplication;