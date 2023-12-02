import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = useState([])

    const typeFilter = searchParams.get("type")


    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
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