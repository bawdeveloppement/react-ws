//#region Dependencies
import React, { useEffect, useContext }  from 'react';
import {
  Link,
  Route, Switch,
} from "react-router-dom";

//#region Components
// import Tchat from './Tchat/Tchat';
//#endregion

//#region Styles
import { AppContext } from './App.context';
import { API_URL }    from './App.constant';
import Auth           from './Auth/Auth';
import PrivateRoute   from '../lib/PrivateRoute';
import Tchat          from './Tchat/Tchat'
//#endregion


const App = () => {
  const app_context = useContext(AppContext);
  // useEffect(() => {
  //   // Check if the server is online in the case we didnt get error
  //   // TODO: Better checking of error with reducer
  //   fetch(API_URL, {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //   .then(res => res.json())
  //   .then(msg => app_context.updateStatus(true))
  //   .catch(err => app_context.updateStatus(false));
  // }, [app_context]);

  return <div className="h-screen flex">
    <Switch>
      <Route exact path="/">
        <Link to="/tchat">Go to tchat</Link>
      </Route>
      <Route path="/auth" children={<Auth></Auth>}/>
      <Route path="/tchat" children={<Tchat></Tchat>}/>
      <Route path="/account" children={Account}/>
    </Switch>  
  </div>
}


// const Tchat = () => {
//   return <div>
//     Hello
//   </div>
// }

const Account = () => {
  const { user } = useContext(AppContext);
  return <div>{ user }</div>
}

export default App;
