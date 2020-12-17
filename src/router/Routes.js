import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, DetailPage} from "../pages"


const Routes = () =>{
  return(
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  )
}

export default Routes;
