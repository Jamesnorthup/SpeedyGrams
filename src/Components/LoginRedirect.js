import { useEffect } from "react"
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginRedirect = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user);
    
    // useEffect(() => {

    // })

    return (
        <div>Loading...</div>
    )
}