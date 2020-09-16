import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About";
import { Add } from "./components/Add";
import { Add2 } from "./components/Add2";
import { Cats } from "./components/Cats";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { NotFound404 } from "./components/NotFound404";
import { PhotosList } from "./components/PhotosList";
import { Post } from "./components/Post";
import "../node_modules/boxicons/css/boxicons.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/post/:id">
          {" "}
          <Post />
        </Route>
        <Route path="/add/:a/:b">
          <Add />
        </Route>
        <Route path="/add">
          <Add2 />
        </Route>
        <Route path="/photos">
          <PhotosList />
        </Route>
        <Route path="/cats">
          <Cats />
        </Route>
        <Route path="*" exact>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
