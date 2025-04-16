import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { pageData } from '@/app/data/pageData'

const page = () => {
    return (
        <div style={{ height: '700px' }}>
            <NavBar heading={pageData.story.heading} description={pageData.story.content} />
        </div>
    )
}

export default page