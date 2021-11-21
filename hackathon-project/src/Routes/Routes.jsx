import { Homepage } from "../Pages/Homepage";
import { LoginSignup } from "../login-signup/LoginSignup";
import { OTP } from "../login-signup/OTP";
import {UserProfile} from "../Pages/UserProfile";
import { Switch, Route } from "react-router-dom";


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