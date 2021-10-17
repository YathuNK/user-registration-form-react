import React from 'react'
import {Route, Redirect } from "react-router-dom"

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
