import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./assets/css/main.css"
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { AppContextProvider } from './components/App.context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider children={<App/>}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();