import React from 'react';
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Formheader from './Components/Formheader';
import Header from "./Components/Header"
import Mainbody from './Components/Mainbody';
import SubmitForm from './Components/QuestionPaper';
import Question_form from './Components/Question_form';
import CenteredTabs from './Components/Tabs';
import Template from './Components/Template';
import User_form from './Components/user_form';

function App() {
  return (
    <div className="app">
         <Router>
           <Switch>
                   
           <Route path="/form/:id">
                 <Formheader />
                 <CenteredTabs />
                 <Question_form />

              </Route>

              <Route path="/response">
                 <User_form />
              </Route>

              <Route path="/submitted">
                 <SubmitForm />
              </Route>

              
              
              <Route path="/">
                <Header />
                <Template />
                <Mainbody />
              </Route>
        
           </Switch>
         </Router>

    </div>
  );
}

export default App;