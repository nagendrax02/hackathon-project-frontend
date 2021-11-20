import { Switch, Route } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";

export default function Routes() {

    return (
        <div>
            <Switch>
                <Route path="/login">
                </Route>
                <Route path="/signup">
                </Route>
                <Route path="/signupFill">
                </Route> 
                <Route path="/" exact>
                    <Homepage></Homepage>
                    </Route>         
            </Switch>
        </div>
    );
}