import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

const RouteHandler = () => {
    return (
        <BrowserRouter>
            <Switch>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} exact>
                            <route.layout>
                                <route.component />
                            </route.layout>
                        </Route>
                    ))}
            </Switch>
        </BrowserRouter>
    );
}

export default RouteHandler;