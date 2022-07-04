import styled from 'styled-components';
import backgroundOne from '../image/backgroundOne.png';
// import ReactAudioPlayer from 'react-audio-player';
import OverTheTop from '../music/over the top.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Button from 'react-bootstrap/Button';


const Container = styled.div `
width: 100%;
`
const Content = styled.div `
`
const Background = styled.div `
height: 100vh;
position: relative;
`
const Back = styled.img `
width: 100%;
height: 100vh;
object-fit: cover;
@media screen and (max-width:1170px) {
}
`


const NavMenu = styled.div `
    position: absolute;
    top: 2%;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 20px;
    }
    a{
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    }
`
const Meta = styled.div `
    position: absolute;
    top: 35%;
    width: 100%;
    display: flex;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
`
const TextTitle = styled.div `
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
`
const SubText = styled.div `
    display: flex;
    justify-content: center;
    font-size: 100px;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
`
const Player = styled.div `
width: 100%;
display: flex;
justify-content: center;
padding-top:20px;
`
import './cust.css'

const Main = () => {
    return ( <
        Container >
        <
        Content >
        <
        Background >
        <
        Back src = { backgroundOne }
        /> <
        NavMenu >
        <
        ul >
        <
        a href = "#" >
        <
        li > About < /li> < /
        a > <
        a href = "#" >
        <
        li > News < /li> < /
        a > <
        a href = "#" >
        <
        li > Music < /li> < /
        a > <
        a href = "#" >
        <
        li > Media < /li> < /
        a > <
        a href = "#" >
        <
        li > Tours < /li> < /
        a > <
        a href = "#" >
        <
        li > Contact < /li> < /
        a > <
        /ul> < /
        NavMenu > <
        Meta >
        <
        TextTitle >
        <
        h1 > New Single < /h1> < /
        TextTitle > <
        SubText >
        <
        p > War For Love < /p> < /
        SubText > <
        Player >
        <
        AudioPlayer style = {
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
        src = { OverTheTop }
        autoPlay = { false }
        controls showJumpControls = { false }
        customAdditionalControls = {
            []
        }
        customVolumeControls = {
            []
        }
        /> < /
        Player > <
        /Meta> < /
        Background > <
        /Content> < /
        Container >
    )
}

export default Main