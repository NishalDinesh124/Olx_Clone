import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import firebase from './firebase/config'
import Context from './store/Context'

ReactDOM.render(
    <Context>
<FirebaseContext.Provider value={{firebase}}>
    <App />
</FirebaseContext.Provider>
</Context>, document.getElementById('root'));
