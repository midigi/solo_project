import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage/index";
import WriteArticle from "./components/WriteArticle/index";
import ViewArticle from "./components/ViewArticle/index";
import NotFound from "./components/NotFound/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/writeArticle">
            <WriteArticle />
          </Route>
          <Route path='/articles/:article_id'>
            <ViewArticle />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
