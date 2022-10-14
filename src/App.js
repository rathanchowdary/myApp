import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import About from "./components/Skills";
import "./App.css";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      {/* <Route exact path="/projects" component={Projects} /> */}
      {/* <Route exact path="/about" component={About} /> */}
    </Switch>
  </>
);

export default App;
