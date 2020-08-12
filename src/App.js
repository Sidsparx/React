import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Error from "./Error";
import Header from "./Header";

function App() {
  return (
    <>
    <Header/>
    <main>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/gallery" component={Gallery} />
       <Route exact path="/contact" component={Contact} />
       <Route  component={Error} />
     </Switch>
     </main>
    </>
  );
}

export default App;
