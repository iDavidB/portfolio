import React, { FC, Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import { Test } from "../Test";
import { Home } from "../Home/Home";

export const Routes: FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { transform: "translateY(100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    leave: { transform: "translateY(100px)", opacity: 0 },
  });

  return (
    <Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </animated.div>
      ))}
    </Fragment>
  );
};
