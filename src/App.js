import './App.css';
import Header from "./Components/Header";
import Template from './Components/Template';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Formheader from './Components/Formheader';
import CenteredTab from "./Components/Tabs";
import Question_form from './Components/Question_form';
import Response from './Components/Response';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/form/:id">
            <Formheader/>
            <CenteredTab/>
            <Question_form/>
            <Response path="/response"/>
          </Route>
          <Route path="/">
            <Header />
            <Template />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
