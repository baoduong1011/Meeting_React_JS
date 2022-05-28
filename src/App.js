import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import logo from "./logo.svg";
// import './App.css';

import { Route, Switch } from "react-router-dom";
import AllMeetUp from "./pages/AllMeetUp";
import Favourites from "./pages/Favourites";
import NewMeetUp from "./pages/NewMeetUp";
import MainNagivation from "./components/layouts/MainNagivation";
import Layouts from "./components/layouts/Layouts";

function App() {
  return (
    <div>
      <Layouts>
        <Switch>
          <Route exact path="/">
            <AllMeetUp />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
          <Route exact path="/new-meetup">
            <NewMeetUp />
          </Route>
        </Switch>
      </Layouts>
    </div>
  );
}

export default App;
