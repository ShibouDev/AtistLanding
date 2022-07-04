import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import OverTheTop from '../music/over the top.mp3';
import 'react-h5-audio-player/lib/styles.css';
import picture from '../image/Ellipse 4.png'
import { Audio } from './SvgImporter'
import NeonAngel from '../music/NeonAngel.mp3'
import TheCloud from '../music/TheCloud.mp3'
import React, { Component, useState } from 'react'
import {Spotify, Itunes} from './SvgImporter'





const Wrapper = styled.div`
width: 100%;
background-color: #1C1B21;
`
const Container = styled.div`
width: 100%;
margin-left:auto;
margin-right:auto;
max-width:1170px;
padding-top: 100px;
padding-bottom: 200px;
display: flex;
justify-content: center;
`

const Picture = styled.div`
@media (max-width: 1150px){
    display:none;
}
`

const Content = styled.div`
display: flex;
flex-direction: column;
padding-left: 50px;
`

const TextTitle = styled.div`
display: flex;
align-items: center;
h4{
    color:white;
    padding-left:20px;
    font-size: 42px;
}
`
const Music = styled.div`
display: flex;
flex-direction: column;
`
const MusicPlaylist = styled.div`
display: flex;
padding-top: 20px;
color: white;
p{
    padding-top: 22px;
    padding-left: 20px;
    font-size: 22px;
}
li{
    list-style: none;
    padding-top: 25px;
    color: gray;
    font-size: 20px;
}
`
const MusicName = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
cursor: pointer;
.active{
    color: #7A66CC;
    font-weight: bold;
}
.disable{
    color: #fff;
    font-weight: bold;
}
`
const SocialLink = styled.div`
display: flex;
padding-top: 10px;
padding-left: 35px;
align-items: center;
fill: white;
a{
    padding-right: 10px;
}
p{
    font-size: 24px;
    color: #7A66CC;
    font-weight:500;
    margin-right: 20px;
}
`


const LastTrack = () => {

    interface IPlaylist {
        name: string;
        src: string;
    }

    const playlist: Array<IPlaylist> = [
        {name: 'Dashine - OverTheTop', src: `${OverTheTop}`},
        {name: 'Virtual RIot, Lektrique, Leah Culver - Neon Angel', src: `${NeonAngel}`}, 
        {name: 'Virtual Riot, Modestep, FRANK ZUMMO - The Cloud', src: `${TheCloud}`},
    ]
    
    const [stateIndexPlaylist, setStateIndexPlaylist] = useState<number>(0);
    const onClickPrevious = (prevState: number): void => setStateIndexPlaylist(prevState === 0 ? playlist.length - 1 : prevState - 1)
    const onClickNext = (prevState: number): void => setStateIndexPlaylist(prevState< playlist.length - 1 ? prevState + 1 : 0)
    
    return(
        <Wrapper>
            <Container>
               <Picture>
               <img src={picture}></img>
               </Picture> 
               <Content>
                   <TextTitle>
                       <Audio/>
                       <h4>Last tracks</h4>
                   </TextTitle>
                   <Music>
                       <AudioPlayer style = {{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                       }}
                        autoPlayAfterSrcChange={true}
                        showSkipControls={true}
                        showJumpControls={false}
                        src={playlist[stateIndexPlaylist].src}
                        onClickPrevious={()=>onClickPrevious(stateIndexPlaylist)}
                        onClickNext={()=>onClickNext(stateIndexPlaylist)}
                        autoPlay = { false }
                       />
                   </Music>
                   <MusicPlaylist>
                        <ul>
                       {playlist.map((track,index) => (
                           <li>{index + 1}</li>
                       ))
                       }
                       </ul>
                       <MusicName> 
                       {playlist.map((track,index) => (
                               <li onClick={()=>setStateIndexPlaylist(index)}className={stateIndexPlaylist === index ? 'active': 'disable'}>{track.name}</li> // сделать чтобы можно былдо переключать трек, когда нажимаешь на названия
                       ))}
                       </MusicName>
                   </MusicPlaylist>
                   <SocialLink>
                       <p>
                       Listen on: 
                       </p>
                       <a href="https://spotify.com">
                        <Spotify/>
                        </a>
                        <a href="https://itunes.com">
                        <Itunes/>
                        </a>
                   </SocialLink>
               </Content>
            </Container>
        </Wrapper>
    )
}
export default LastTrack