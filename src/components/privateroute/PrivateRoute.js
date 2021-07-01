import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {
    Route, Redirect, location
  } from "react-router-dom";

 const PrivateRoute = ({children, ...rest}) => {

  const user = JSON.parse(localStorage.getItem("user"))
    const { isAuth } = useSelector(state => state.login);

    const {loginResponse} = useSelector(state => state.login)

    // useEffect(() => {
    //   if(!loginResponse.result && user._id) {
    //     dispatch(setUser(user))

    //   }else{

    //   }
    // }, [input])

console.log(user)
    // console.log(isAuth)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute