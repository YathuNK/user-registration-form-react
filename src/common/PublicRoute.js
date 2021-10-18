import React from 'react'
import {Route, Redirect } from "react-router-dom"

// check the user logged in, if yes render home page for logged users
// logged user cannot access pages like login and register
function PublicRoute({component:Component, ...rest}) {
    let token = localStorage.getItem('token')
    return (
        <Route 
        {...rest}
        render={(props)=>{
            return token ? <Redirect to="/" />:  <Component {...props}/>
        }}
    />
    )
}

export default PublicRoute
