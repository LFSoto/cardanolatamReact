import React from "react";
import Index from "./pages/index/index";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Faqs from "./pages/faqs/faqs";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/index" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
