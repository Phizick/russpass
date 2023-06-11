import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { MainPage } from "../../pages/MainPage/MainPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";

export const App = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact={true}>
        <MainPage />
      </ProtectedRoute>
      <Route path="/login" exact={true}>
        <LoginPage />
      </Route>
      <Route path="/register" exact={true}>
        <RegisterPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
      <Route />
    </Switch>
  );
};
