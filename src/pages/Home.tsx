// import React from 'react'
import Main from '../components/main'
import News from '../components/news'
import AboutUs from '../components/aboutUs'
import Artist from '../components/infoArtist'
import LastTrack from '../components/lastTrack'
import Gallery from '../components/gallery'
import Playbill from '../components/playbill'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div>
        <Main/>
        <News/>
        <AboutUs/>
        <Artist/>
        <LastTrack/>
        <Gallery/>
        <Playbill/>
        <Footer/>
        </div>
    )
}

export default Home
