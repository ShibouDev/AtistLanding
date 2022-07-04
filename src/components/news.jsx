import React from "react";
import styled from 'styled-components'
import BlockBackgroundOne from '../image/BlockOneBg.png';
import BlockBackgroundTwo from '../image/BlockTwoBg.png';
import BlockBackgroundThree from '../image/BlockThreeBg.png';
import Slider from "react-slick"; //Сделать слайдер!
import { useState, useEffect } from 'react'

const Wrapper = styled.div `
width: 100%;
background-color: #1C1B21;
`
const Container = styled.div `
position: absolute;
width: 100%;
display:flex;
top: 90%;
justify-content: center;
`
const Blocks = styled.div`
display: flex;
flex-direction: row;

`
const Block = styled.div`
@media screen and (max-width: 1150px) {
    :nth-child(3) {
    display:none;
    }
}
@media screen and (max-width: 760px) {
    :nth-child(2) {
    display:none;
    
    }
}

width: 350px;
height: 300px;
border-radius:10px;
position: relative;
margin-left:30px;
`
const Postcard = styled.div`
position: relative;
top: -93px;
width: 350px;
height: 90px;
background-color: rgba(122, 102, 204, 0.8);;
border-radius: 20% 5%;
text-align: left;
color: #fff;
p{
    padding-top:25px;
    padding-left: 5px;
}
`

const News = () => {
//     const [w, setW] = useState(window.innerWidth)

//   useEffect(() => {
//     window.addEventListener('resize', () => {
//       setW(window.innerWidth)
//       console.log(w)
//     })
//   }, [])
// const banners = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 3,
//     slidesToShow: w > 760 ? (w > 1400 ? 3 : 2) : 1,
//     arrows: true,
//     autoplay: false,
//     autoplaySpeed: 3000,
// }
    return (
        <Wrapper>
            <Container>
                <Blocks>
                {/* <Slider {...banners}> */}
                    <Block>
                    <img src={BlockBackgroundOne}></img>
                        <Postcard>
                            <p>Working on my upcoming full-lenth
                            album that`s releasing later this year.</p>
                        </Postcard>
                    </Block>
                    <Block>
                    <img src={BlockBackgroundTwo}></img>
                        <Postcard>
                            <p>Halloween vibes. 
                            Listen my new track!</p>
                        </Postcard>
                    </Block>
                    <Block>
                    <img src={BlockBackgroundThree}></img>
                        <Postcard>
                            <p>WarForLove is OUT NOW!! 
                            Stream it here!</p>
                        </Postcard>
                    </Block>
                    {/* </Slider> */}
                </Blocks>
            </Container>
        </Wrapper>
    )
}
export default News