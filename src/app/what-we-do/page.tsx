import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { pageData } from '@/app/data/pageData'
import './whatWeDo.css'

const page = () => {
  return (
    <div style={{ height: 'auto' }}>
            <NavBar heading={pageData.whatWeDo.heading} descriptionTwo={pageData.whatWeDo.description} description={pageData.whatWeDo.features} />
        </div>
  )
}

export default page