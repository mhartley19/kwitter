import React from 'react'
import{Link} from "react-router-dom"


export const CreateSuccessMessage = () => {
    return(<>
    <h3>NEW USER CREATED!!</h3>
    <Link to="/">Return to HomeScreen</Link>
    </>
    
    
        )

}

export const CreateUserError = () => {
    return (
        <>
        <h3>Sorry Choose a different Username</h3>
        </>
    )
}

export const LoginError = () => {
    return (
        <>
        <h3>Incorrect Password, Please try again</h3>
        </>
    )
}
