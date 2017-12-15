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
    }
}
this.ChangeValue = this.ChangeValue.bind(this)
this.ArrayHandler = this.ArrayHandler.bind(this)
this.radioHandler = this.radioHandler.bind(this)
}

ChangeValue(ev)
{
// console.log(ev.target.value)
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
        </div>
    )
}

}

export default Forms; 