import {Fragment } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";



import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import Navbar from "./components/layout/Navbar";
import Addlist from "./components/action/Addlist";
import Editlist from "./components/action/Editlist";
import NotFound from "./components/NotFound";
import PrivateRoute from "./Utils/PrivateRoute"
import 'bootstrap/dist/css/bootstrap.css';




function App() {

  return (
    
      <Router>
        <div className="App">
        <Fragment>
        <Navbar />
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact  path="/login" element={<Login />} /> 

              <Route  exact path="/dashboard" element={ <PrivateRoute />}>
              <Route  exact path="/dashboard" element={ <Dashboard />}/>
              </Route>

              <Route  exact path="/lists" element={ <PrivateRoute />}>
              <Route exact path="/lists" element={ <Lists /> } />
              </Route>

              <Route  exact path="/lists/add" element={ <PrivateRoute />}>    
              <Route exact path="/lists/add" element={ <Addlist /> } />
              </Route>

              <Route  exact path="/lists/edit" element={ <PrivateRoute />}>
              <Route exact path="/lists/edit" element={ <Editlist /> } />
              </Route>

              <Route path="*" element={<NotFound />} />        
          </Routes>
        </Fragment>

        </div>
    </Router>
  );
}

export default App;
