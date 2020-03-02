import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from  'firebase/app'
import 'firebase/storage' 
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyCuXSeGhJPHPxruzEa-4WVnCBZJmgyJm2o",
    authDomain: "music-player-c3283.firebaseapp.com",
    databaseURL: "https://music-player-c3283.firebaseio.com",
    projectId: "music-player-c3283",
    storageBucket: "music-player-c3283.appspot.com",
    messagingSenderId: "281113470388",
    appId: "1:281113470388:web:278b0f5e91c85afd78bee1",
    measurementId: "G-ML9P14GGPB"
  };
  
  firebase.initializeApp(firebaseConfig);

  // const storage=firebase.storage();


ReactDOM.render(<App />, document.getElementById('root'));



