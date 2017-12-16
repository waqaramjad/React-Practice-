import React from 'react'
import App from './App';
import About from './about';
import Docs from './Docs';
import Navbar from './Navbar'
import createBrowserHistory from 'history/createBrowserHistory'


import {
    
     Router,
    Route,
    Link
} from 'react-router-dom'

const customhistory = createBrowserHistory()
const Func = () =>(
// console.log(customhistory)

<Router history={customhistory}>
    <div>
    <Navbar/>
        
        
        <hr/>
        <Route exact path='/' component={App}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Docs' component={Docs}/>
        
    </div>
</Router>

)

export default Func;