import React , {Component} from 'react'
import Counterp from './CounterP'
class Counterc extends Component
{



    render()
    {
        return(
            <div>
 <button onClick= {this.props.update} >+</button>
            <h1>{this.props.value}</h1>
 <button onClick= {this.props.decrease} >-</button>
            </div>
           
        )
    }
}

export default Counterc ;