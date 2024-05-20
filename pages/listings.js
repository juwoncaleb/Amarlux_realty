import React from 'react'
import { data } from '../utils/data'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <p className='exclusive_listings text-center'>Exclusive <br/> Listing</p>
      <div className="grid frame_div grid-cols-1  lg:grid-cols-2 gap-10 ">
        {data.map((property) => (
          <div key={property.id}>
            <Link href={`/property/${property.id}`}>
              <div>
                <img preload className="listing_property" src={property.images[0]} />
                <p className="property_name">{property.name}</p>
                <p className="property_location">{property.location}</p>
                <p className="prop_deb">
                  {property.bed}Bed | {property.bath}bath |{" "}
                  {property.livingArea} SQR ft
                </p>
                {/* <img src={property.images[0]} alt={property.name} /> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
