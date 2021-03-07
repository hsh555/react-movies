import { BrowserRouter, Route, Switch } from "react-router-dom"
import PublicLayout from "../components/layouts/public-layout";
import Home from "../pages/home"
import routes from "./routes";

const RouteHandler = () => {
    return (
        <BrowserRouter>
            <Switch>
                    {/* <PublicLayout>
                        <Home />
                    </PublicLayout> */}
                    {routes.map(route => (
                        <Route path={route.path} exact>
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