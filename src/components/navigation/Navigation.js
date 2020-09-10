import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  HomeScreen,
  ProfileScreen,
  NotFoundScreen,
  MessageFeed,
  NewUserScreen,
} from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { UpdateForm} from "../../components/updateForm/UpdateForm"

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        path="/createNewUser"
        redirectIfAuthenticated
        component={NewUserScreen}
      />

      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/messagefeed"
        component={MessageFeed}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/editprofile/:username"
        component={UpdateForm}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
