import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import News from "./News";
import NotFound from "./NotFound";

import Navigation from "../components/navigation"

const Routes = () => {

  // Load user session
  useEffect(() => {
    //   Do firebase user authentication stuff here
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {/* MANAGER ROUTES */}

        {/* USER ROUTES */}
        <Route exact path="/news" component={News} />
        <Route exact path="/" component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
};

export default Routes;
