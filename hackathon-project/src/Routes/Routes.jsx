import { Switch, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { LoginSignup } from "../components/login-signup/LoginSignup";
import { OTP } from "../components/login-signup/OTP";
import {UserProfile} from "../Pages/UserProfile";

export default function Routes() {

    return (
        <div>
            <Switch>
                <Route path="/login-signup">
                    <LoginSignup></LoginSignup>
                </Route>
                <Route path="/otp">
                    <OTP></OTP>
                </Route>
                <Route path="/signupFill">
                </Route> 
                <Route path="/" exact>
                    <Homepage></Homepage>
                    </Route>
                    <Route path="/userprofile">
                        <UserProfile></UserProfile></Route>         
            </Switch>
        </div>
    );
}