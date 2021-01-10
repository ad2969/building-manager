import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";
import NotFound from "./NotFound";
import FirebaseAuth from "./FirebaseAuth";

import Navigation from "../components/navigation"

const Routes = () => {

  // Load user session
  useEffect(() => {
  }, []);

  return (
    <BrowserRouter>
      <Switch>
      <Route path="/auth" component={FirebaseAuth} />
        {/* MANAGER ROUTES */}

        {/* USER ROUTES */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
};

export default Routes;
