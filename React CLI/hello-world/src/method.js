import React, { Component } from 'react';

class Method extends Component
{
myfbidName()
{
    return 'WAQAR AMJAD'
}
myfbidLink()
{
    return 'https://www.facebook.com/'
} 


render()
{
return(
 <div>
    <p>my facebook id is <a href={this.myfbidLink()}>{this.myfbidName()}</a></p>
    </div>)

}
}

export default Method;