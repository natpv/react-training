import { Route, Redirect } from "react-router-dom";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: RoutedComponent, ...rest }) {
  let auth = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <RoutedComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
