import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import { WorkspaceProvider } from "../contexts/Workspace";
// import { workspace as defaultWorkspace, workspace } from "../constants";


import Page from "../components/Page";

import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";

import styles from "./AppRouter.module.scss";

// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// import { AuthStatus } from "../contexts/Auth/state";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const shouldRedirectToLogin = auth.authStatus === AuthStatus.UNAUTHORIZED;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/welcome" component={Welcome} />
                    {/* <Route exact path="/test" component={Basic} /> */}
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* DELETE THIS LINE <Redirect to="/welcome" /> */}
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
