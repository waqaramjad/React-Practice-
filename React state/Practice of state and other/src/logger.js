import React, { Component } from 'react';
import Clock from './App'





class Logger extends Component

{

    constructor(props)
    {
    super(props);
    // this.state = {
    
    console.log('constructor')
    // }
    }
    
    componentWillMount()
    {
    console.log('Compnoent Will Mount')
    
    }

    shouldComponentUpdate(nextProps,nextState)
{
    console.log(`nextProps`,nextProps)
    console.log(`nextState`,nextState)
    console.log(`should component update`)

return true;
}

componentWillReceiveProps(nextProps)
{
    
console.log(`nextProps recieve`,nextProps)

}

componentDidMount()
{
    console.log('componentDidMount()')
}

componentDidUpdate(oldProps,oldState)
{

    console.log('oldProps',oldProps)
    console.log('oldProps()',oldProps)
    console.log('componentDidUpdate()')

}

componentWillUnmount()
{
    console.log('componentWillUnmount()');
}

hello(){
    return(
        <div>

            <h1>wiki is ma ha  </h1>
            <h1>wiki is ma ha  </h1>
            <h1>wiki is ma ha  </h1>

        </div>
        // console.log('wikki hello')
        
    )
}

    render()
    {
        console.log('render')
        
        return(
            <div>
            {this.hello()}

                <h1>{this.props.time}</h1>
                <h1>Hello World </h1>
            </div>
        )
    }
}



export default Logger;


