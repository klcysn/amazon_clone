import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, DetailPage, Basket, SignIn, SignUp} from "../pages"


const Routes = () =>{
  return(
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/basket" component={Basket} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  )
}

export default Routes;
