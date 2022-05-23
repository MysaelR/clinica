import React, { ReactElement, useEffect } from "react";
import {
    Navigate,
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    useLocation,
  } from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: ReactElement;
  }

  const CustomRoute: React.FC<RouteProps> = ({isPrivate= false, component}) => {

    const location = useLocation();

    return(
        // isPrivate?
        <></>
    );
  }
