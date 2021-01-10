import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Landing from "./Landing";
import NotFound from "./NotFound";

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
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
