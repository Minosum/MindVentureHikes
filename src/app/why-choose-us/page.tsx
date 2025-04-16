import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { pageData } from '@/app/data/pageData'
import './whyChooseUs.css'

const page = () => {
    return (
        <div style={{ height: 'auto' }}>
            <NavBar heading={pageData.whyChooseUs.heading} description={pageData.whyChooseUs.points} />
        </div>
    )
}

export default page