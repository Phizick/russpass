import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, path, exact }) => {
  return (
    <Route
      path={`${path}`}
      exact
      render={({ location }) =>
        window.localStorage.getItem("token") ? (
          children
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
};
