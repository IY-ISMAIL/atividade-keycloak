import { Switch, Route, Redirect } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import Login from './components/login';
import Dashboard from './components/dashboard';
import Home from './components/home';

const Routes = () => {
  const { initialized, keycloak } = useKeycloak();

  if (!initialized) {
    return <div>Carregando...</div>;
  }
  const Private = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          console.log("rota privada ->", props.location);
          return keycloak.authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: props.location.pathname,
              }}
            />
          );
        }}
      />
    );
  };
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Private exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
export default Routes;
