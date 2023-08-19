import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Driver from "./pages/Driver/driver";
import Repoprts from "./pages/Reports/Reports";
import Login from "./Login page/Login";
import { Component } from "react";


class App extends Component{

  render() {

    return (
      <div>
        <div>
          <Login />
        </div>
        <Router>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList  />
              </Route>
              <Route path="/drivers">
                <Driver />
              </Route>
              <Route path="/reports">
                <Repoprts />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
