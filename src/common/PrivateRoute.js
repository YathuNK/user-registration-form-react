import React from 'react'
import {Route, Redirect } from "react-router-dom"

// check the user logged in, if not render login page
function PrivateRoute({component:Component, ...rest}) {
    let token = localStorage.getItem('token')
    return (
        <Route 
        {...rest}
        render={(props)=>{
            return token ? <Component {...props}/> : <Redirect to="/login" /> 
        }}
    />
    )
}

export default PrivateRoute
