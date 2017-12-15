/******************************************************************** Analogue  file  Clock **************************************************                      */
import React, { Component } from 'react';

// import Analogeclock from './AnalogeClock'

// import Myclock from './digitalClock' 
// import Logger from './logger' 

class Clock extends Component
{
  constructor(props)
  {
    console.log(props);
    super(props);
      this.state =     {
        currentTime : new Date().toLocaleString(),
        counter : 0

      
      
      }
      this.updateTime();
      
  }

updateTime()
{
  setInterval(  () =>{
    // console.log('this' , this)
    this.setState({
  currentTime : new Date().toLocaleString(),
  counter : this.state.counter+1

 })    
  } ,1000
)
}

  render()
  {
        return(
        // <div>

/* <Myclock time={this.state.currentTime}/>
          <Analogeclock time={this.state.currentTime}/>  */
          /* {
(this.state.counter<1000) ?
( <Logger time={this.state.currentTime} />):
(<div>
  <h1>blast </h1>
</div> )
          }    */
        /* </div> */
        <div>

          <h1> { this.state.currentTime } </h1>
        </div>
        )
          
        // )

  }

}
export default Clock;





























/******************************************************************** 2ND using Digital file  Clock **************************************************                      */
// import React, { Component } from 'react';

// import Myclock from './digitalClock'  

// class Clock extends Component
// {
//   constructor(props)
//   {
//     console.log(props);
//     super(props);
//       this.state =     {
//         currentTime : new Date().toLocaleString()
      
      
//       }
//       this.updateTime();
      
//   }

// updateTime()
// {
//   setInterval(  () =>{
//  this.setState({
//   currentTime : new Date().toLocaleString()
  

//  })    
//   }
// )
// }

//   render()
//   {
//         return(
        
//           // <h1> { this.state.currentTime } </h1>)
//           <Myclock time={this.state.currentTime}/>)

//   }

// }
// export default Clock;


/******************************************************************** Normal Clock **************************************************                      */


// constructor()
// {

//   super()
//   this.state = {val : 0;}
  

// }

// ComponentWillMount()
// {

//    console.log('will mount ')
//   this.setState({abc:2})

//   }

// ComponentDidMount()
// {

// }

// shouldComponentUpdate()
// {
//   return this.state.val % 5 === 0 ;
// }
// update()
// {
//   this.setState({val : this.state.val+1 })

// }
// render()
// {
  
//   return( <div>


    
//   </div> );
  
// }