import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <>
    <h1 className='text-center text-danger'>Error: {error.message}</h1>
    <pre className='text-center'>{error.status} - {error.statusText}</pre>
    </>
    
  )
}

export default Error