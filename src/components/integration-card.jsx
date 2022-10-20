import React from 'react'
import { useState } from 'react'

function IntegrationCard({data}) {
    const[active,setActive]=useState(true)
  return (
    <div className='integration-card card'>
        <div className='row d-flex align-items-center'>
            <div className='col-lg-3'><img style={{height:'60px'}} src={data.image}/></div>
            <div className='col-lg-9 pt-4'><h5>{data.name}</h5><p>{data.type}</p></div>

        </div>
        <div className=' integration-tab mb-3 border-bottom'>
            <button className={`ms-3 ${active?'active':''} text-black`} onClick={()=>setActive(true)}><b>Details</b></button>
            <button className={`ms-3 ${!active?'active':''} text-black`} onClick={()=>setActive(false)}><b>Description</b></button>

        </div>
        <div className='integration-content mx-3 d-grid gap-2'>
            {active?<ul style={{lineHeight:'35px'}}>
                <li>
                    Setup Time:<strong className='text-success'> {data.details.setupTime}</strong>
                </li>
                <li>
                    Best for: {data.details.bestFor}
                </li>
                <li>
                    Price: {data.details.price}
                </li>
                <li>
                    Product pushed to store: {data.details.productPushedToStore}
                </li>
                <li>
                Displays "out of stock" notice: {data.details.displayNotice}
                </li>
                <li>
                Open source: {data.details.openSource}
                </li>
                <li>
                Product personalization tool: {data.details.productPersonaliZation}
                </li>
                {data?.details?.socialMediaSale?<li>
                Sell on social media: {data.details.socialMediaSale}
                </li>:<></>}
            </ul>:
            <ul  style={{lineHeight:'25px'}}><li>Description: {data.description}</li></ul>}
            <button className='btn btn-secondary mb-3'>Learn more</button>
        </div>
    </div>
  )
}

export default IntegrationCard