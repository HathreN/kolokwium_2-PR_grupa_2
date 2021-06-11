import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import KDhome from "./components/KDhome";
import KDnavbar from "./components/KDnavbar";

function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <div className="container-fluid">
                    <KDnavbar />
                </div>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={KDhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
