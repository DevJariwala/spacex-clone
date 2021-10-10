import React from 'react'
import Footer from './Footer'
import './Home.css'
import Nav from './Nav'
import Section from './Section'

function Home() {
    return (
        <div>
            <Nav />
            <Section medium="Complete Mission" large="Dragon returns to earth" small="Dragon Completes world's first all-civilian mission to orbit" image="spaceImage.jpg" downarrow="true" btn="rewatch" />
            <Section medium="Recent Launch" large="starlink mission" image="starlink.jpg" btn="rewatch" />
            <Section medium="Recent Launch" large="crs-23 mission" image="crs23.jpg" btn="rewatch" />
            <Section large="startship to land nasa astronauts on the moon" image="startship.jpg" btn="Learn more" />
            <Footer />
        </div>
    )
}

export default Home
