import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counterp from './CounterP'
import App from './App';
import Func from './Route.js'
import Route1 from './Router'
// import registerServiceWorker from './registerServiceWorker';
import * as firebse from './firebase';


{/* <script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script> */}

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBucSYR_-jHd_GY1WVnrtmTw4FtI5KM90",
    authDomain: "projects-d01b3.firebaseapp.com",
    databaseURL: "https://projects-d01b3.firebaseio.com",
    projectId: "projects-d01b3",
    storageBucket: "projects-d01b3.appspot.com",
    messagingSenderId: "894816354920"
  };
  firebase.initializeApp(config);

// firebase.initializeApp(config);


ReactDOM.render(<Route1/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();
