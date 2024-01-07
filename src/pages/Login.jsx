import React from "react"
import { useState, useEffect } from "react"
import { useNavigation, useLoaderData, Form, redirect, useActionData } from "react-router-dom"
import { loginUser } from "../../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password }) 
        localStorage.setItem("loggedin", true)
        
        const response = redirect(pathname)
        response.body = true
        return response  
    } catch (error) {
        console.log(error.message)
        return error.message
    } 

    
}

export default function Login() {
     
    const message = useLoaderData()
    const loginError = useActionData()
    const navigation = useNavigation()

    
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h4 className="red">{message}</h4>}
            {loginError && <h4 className="red">{loginError}</h4>}
            <Form 
            method="post" 
            className="login-form"
            replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                 disabled={navigation.state === "submitting"}
                >
                     {navigation.state === "submitting"  
                       ? "Logging in..." 
                       : "Log in"
                    }
                </button>
            </Form>
        </div>
    )

}