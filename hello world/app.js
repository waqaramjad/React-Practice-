// ReactDOM.render(React.createElement('a',{href:'https://www.youtube.com'},'youtube'),document.getElementById('reactCom'))

//***********************************  task 1 *****************************************************
// ismple react Element
// var getElement = document.getElementById('reactCom');
// var firstComponent = React.createElement('h1',null,'i am waqar amjad');

// ReactDOM.render(firstComponent,getElement);


//***********************************  task 1 *****************************************************
// create own react Element

// class Mycomponent extends React.Component
// {
//     render()
//     {
//         return React.createElement('h1',null,'WikTech')
//     }
// }
// var first = React.createElement(Mycomponent,null)

// var getElement = document.getElementById('reactCom');

// ReactDOM.render(first,getElement)










//***********************************  task 1 *****************************************************

// passs many component in my component 
// baby step 4  
var get = document.getElementById('reactCom')
// var h1 = React.createElement('h1',null, 'Head')
// var p = React.createElement('p',null,  'hdhf ih dfi  f s idhs df s  fsihd fh sdh f')

// class WikTech extends React.Component
// {
// render()
// {

//     return React.createElement('div',null, h1, p);
// }

// }
// var a = React.createElement(WikTech,null)
// ReactDOM.render(a,get)



//***********************************  task 1 *****************************************************
// this.this.props.


// class CustomLink extends React.Component 
// {
    
//     render()
//     {
//         console.log(this.props,this.props,this.props.linktext)
      
//         return  React.createElement('a', this.props,this.props.linktext)
        
//     };
// }

// var maraLinks =  React.createElement('div' , null,

// React.createElement(CustomLink , {href:'https://www.youtube.com/',linktext:'youtube',title:"youtube"}),
// React.createElement(CustomLink , {href:'https://www.google.com/',linktext:'Gogle',title:"Gogle"})

// ) 


// ReactDOM.render(maraLinks,get)







//***********************************  task 1 *****************************************************
// agin practice of this.props.

// class PracticeComponent extends React.Component
// {
//     render()
//     {
//         return React.createElement('a',this.props,this.props.linktext)
//     }
// }

// var a = React.createElement('div',null,
// React.createElement(PracticeComponent,{href:'https://www.youtube.com',linktext:'hy'})
// )
// // var a = React.createElement('div',{href:'https://www.youtube.com',linktext:'hy'})
// ReactDOM.render(a,get)
