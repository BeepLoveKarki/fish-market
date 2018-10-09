import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Root=()=>{
    return (
        <Router>
          <div>
           <Switch>
              <Route exact path="/" component={StorePicker}/>
              <Route exact path="/store/:storeId" component={App}/>
              <Route component={NotFound}/>
           </Switch>
          </div>
        </Router>
    )
}

export default Root;