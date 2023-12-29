import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api'


export function loader() {
    return getVans()
}

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)

    
    const vans = useLoaderData()

    const typeFilter = searchParams.get("type")


    
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans?.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}
            state={{ search: `?${searchParams.toString()}`, 
            type: typeFilter 
        }}
             >
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons mx-2">
                <button 
                    onClick={()=>setSearchParams({type:"simple"})}
                    className={
                        `van-type simple mx-2 ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button 
                    onClick={()=>setSearchParams({type:"luxury"})}
                    className={
                        `van-type luxury mx-2 ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button 
                    onClick={()=>setSearchParams({type:"rugged"})}
                    className={
                        `van-type rugged mx-2 ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>
                {typeFilter&&<button 
                    onClick={()=>setSearchParams({})}
                    className="van-type clear-filters mx-2"
                >Clear filter</button>}
            
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans