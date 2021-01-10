import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import NotFound from "./NotFound";
import FirebaseAuth from "./FirebaseAuth";

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
        <Route path="/" component={Landing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
