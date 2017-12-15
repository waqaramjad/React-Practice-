import React , {Component} from 'react'
import Counterc from './CounterC'

class Counterp extends Component
{

    constructor(props)
    {
super(props);
this.state = {
    counter : 0
}

this.update = this.update.bind(this);
this.decrement = this.decrement.bind(this);
    }

update()
{
    if(this.state.counter >= 10)
    {
        alert('yepeeee')
    }
    else{
        this.setState(
            {
              counter: this.state.counter + 1 
            }
    
    
    )}
}

decrement()
{

    if(this.state.counter <= 0)
    {
        alert('sorry')
    }
    else{
    this.setState(
        {
          counter: this.state.counter - 1 
        })}
}

render()
    {
        return(
            <Counterc update={this.update} decrease={this.decrement} value={this.state.counter}/>
        )
    }
}

export default Counterp ;