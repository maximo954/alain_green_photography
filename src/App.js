import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./components/Home";
import HeaderMenu from "./components/HeaderMenu";
import HeadShots from "./components/HeadShots";
import ProductShots from "./components/ProductShots";
import Contact from "./components/Contact";
import { Container } from "semantic-ui-react";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderMenu />
        <Route exact path="/" component={Home} />
        <Container>
          <Switch>
            <Route exact path="/head_shots" component={HeadShots} />
            <Route exact path="/photos" component={Portfolio} />
            <Route exact path="/products" component={ProductShots} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
