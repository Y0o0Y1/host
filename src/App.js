import Login from "./pages/Login"
import ForgetPassword from './pages/ForgetPassword';
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from "./components/Header";
import BusinessProfileVerification from "./pages/BusinessProfileVerification"
import FloorPlan from "./pages/FloorPlan"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/forget-password">
            <ForgetPassword />
          </Route>
          <Route exact path="/floor-plan">
            <FloorPlan />
          </Route>
          <Route exact path="/business-profile-verification">
            <BusinessProfileVerification />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
