import Header from "./Components/Header";
import LoginForm from "./Components/LoginForm/LoginForm";
import FreeTrial from "./Components/FreeTrial/FreeTrial";

import { useSelector } from "react-redux";
import Contact from "./Components/Contact/Contact";
import { Route, Switch } from "react-router";
import { Fragment, useState } from "react";

function App(props) {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <div>
            {!isLogin && <LoginForm />}
            {isLogin && <Header />}
          </div>
        </Route>
        <Route path="/freetrial">
          <FreeTrial />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}
/*
 {!isLogin && <LoginForm />}
      {isLogin && <Header />}
      {!isLogin && <LoginForm />}
       */
export default App;
