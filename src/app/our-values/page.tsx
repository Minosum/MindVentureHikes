import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { pageData } from '@/app/data/pageData'
import './values.css'

const page = () => {
    return (
        <div style={{ height: 'auto' }}>
            <NavBar heading={pageData.values.heading} description={pageData.values.items} />
        </div>
    )
}

export default page