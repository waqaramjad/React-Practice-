import React , {Component} from 'react'

class Forms extends Component
{

constructor(props)
{
super(props)
this.state = {
    userInput : "",
    userList : [],
    radioGroup : {
        Meanstack:false,
        Mernstack: false,
        Lampstack:false
    },
    checkGroup  : {
        Meanstack:false,
        Mernstack: false,
        Lampstack:false
    }, 
    select :'c'

}
this.ChangeValue = this.ChangeValue.bind(this)
this.ArrayHandler = this.ArrayHandler.bind(this)
this.radioHandler = this.radioHandler.bind(this)
this.checkhandler = this.checkhandler.bind(this)
this.selecthandler = this.selecthandler.bind(this)
}
selecthandler(ev)
{
    console.log(ev.target.value)
    this.setState({
        select : ev.target.value
    })
   
    this.wiki();

}
wiki()
{
    console.log(this.state.select, 'select')
}
ChangeValue(ev)
{
// console.log(this)
this.setState ({
    userInput : ev.target.value,
//   userInput:""  
  
})
}

ArrayHandler(ev)
{

let list = this.state.userList
list.push(this.state.userInput)

this.setState({
    userInput:""  ,
  userList:list
})
console.log(this.state.userList)
}
checkhandler(ev)
{
    let checkbox = this.state.checkGroup;
    checkbox[ev.target.value] =  ev.target.checked;
    console.log(ev.target.value)
this.setState({
    checkGroup :  checkbox
})
}
radioHandler(ev)
{
// console.log(ev.target.value)
let radioGroup1 = this.state.radioGroup;
for(var key in radioGroup1)
{
    console.log(key,'key')
    console.log(radioGroup1,'radioGroup')
    radioGroup1[key] = false;

}

radioGroup1[ev.target.value] = ev.target.checked

this.setState({
radioGroup: radioGroup1

})

}


render()
{


    return(

        <div>
            <h1>Hello forms</h1>
            <input onChange={this.ChangeValue} />
            <button onClick={this.ArrayHandler}>Click</button>
            <p>{this.state.userInput}</p>
            <h4>Radio Group</h4>
            <label>
                Mean Stack <input type="radio" name="devCateg" value="Meanstack" checked={this.state.radioGroup['Meanstack']} onChange={this.radioHandler}/> </label>
                <label>   Mern Stack <input type="radio" name="devCateg" value="Mernstack" checked={this.state.radioGroup['Mernstack']} onChange={this.radioHandler}/> </label>
                <label>  lamp Stack <input type="radio" name="devCateg" value="Lampstack" checked={this.state.radioGroup['Lampstack']} onChange={this.radioHandler}/>
            </label>

            <h4>check box </h4>
            <label>
                Mean Stack <input type="checkbox" name="developers" value="Meanstack" checked={this.state.checkGroup['Meanstack']} onChange={this.checkhandler}/> </label>
                <label>   Mern Stack <input type="checkbox" name="developers" value="Mernstack" checked={this.state.checkGroup['Mernstack']} onChange={this.checkhandler}/> </label>
                <label>  lamp Stack <input type="checkbox" name="developers" value="Lampstack" checked={this.state.checkGroup['Lampstack']} onChange={this.checkhandler}/>
            </label>
        
        <br/>
        <h4>drop down menue  </h4>

        <select name='developeroption' onChange={this.selecthandler} value={this.state.select}>
            <option  value='Ruby' >Ruby</option>
            <option  value='python'>python</option>
            <option  value='c'>c</option>


        </select>
        {/* <h4>    </h4> */}
        
        </div>


    )
}

}

export default Forms; 