import React from 'react';
    import ReactDOM from 'react-dom';
import './index.css';
import HelloComponent from './App';
import registerServiceWorker from './registerServiceWorker';
import Method from './method'





// var h1 = React.createElement('h1',null,'hello waqar whatvs up')
// var h1 = <h1 title='iudfiuddfbduifb'>'suyfuydusudfu</h1>
ReactDOM.render(
<div>
<HelloComponent link="https://www.facebook.com/" color='blue' saya="block" linktext="Facebook" ></HelloComponent>
<HelloComponent link="https://www.youtube.com/" color='black' saya="block" linktext="youtube"></HelloComponent>
<HelloComponent link="https://www.google.com/" color='green' saya="block"linktext="google"></HelloComponent>
<Method/>
</div>


    , document.getElementById('root'));
// registerServiceWorker();
