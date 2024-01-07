import React, {Suspense} from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useLoaderData, defer, Await } from 'react-router-dom'
import { getVans } from '../../../api'

export function loader({ params }) {
    return defer({vans:getVans(params.id)})
}


const VanDetails = () => {
    const location = useLocation()

    const dataPromise = useLoaderData()


    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Suspense fallback={<h2>Loading van...</h2>}>
                <Await resolve={dataPromise.vans}>{(van)=>{
                   return (
                    <>
                    <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
                <div className="van-detail">
                    <img src={van.imageUrl} className='img-fluid'/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
                </>
                   ) 
                    
                }}</Await>
            </Suspense>
            
        </div>
    )
}

export default VanDetails