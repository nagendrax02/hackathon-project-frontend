import { Login } from "../components/Login/Login";
import { Signup } from "../components/SignUp/Signup";
import { SignupFill } from "../components/SignUp/SignupFill";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

export default function Routes() {

    return (
        <div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/signupFill">
                    <SignupFill />
                </Route> 
                <Route path="/navbar">
                    <NavBar></NavBar>
                    </Route>         
            </Switch>
        </div>
    );
}