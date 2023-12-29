import React from 'react'
import { useParams} from 'react-router-dom'
import { useEffect,useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import VanHostNavBar from '../../components/VanHostNavBar'
import { getHostVans } from '../../../api'
import { requireAuth } from "../../../utils"


    
export async function loader({params}) {
    await requireAuth()
    return getHostVans(params.id)
}

const VanHostDetails = () => {
const currentVan = useLoaderData()

      
  return (
      <section>
          <Link
              to=".."
              relative='path'
              className="back-button"
          >&larr; <span>Back to all vans</span></Link>

          <div className="host-van-detail-layout-container">
              <div className="host-van-detail">
                  <img src={currentVan.imageUrl} />
                  <div className="host-van-detail-info-text">
                      <i
                          className={`van-type van-type-${currentVan.type}`}
                      >
                          {currentVan.type}
                      </i>
                      <h3>{currentVan.name}</h3>
                      <h4>${currentVan.price}/day</h4>
                  </div>
              </div>
          </div>
          <VanHostNavBar/>
          <Outlet context={{ currentVan }}/>
      </section>
  )
}

export default VanHostDetails
