import styled from 'styled-components'
import Slider from 'react-slick'
import ticket1 from '../image/ticket1.png'
import ticket2 from '../image/ticket2.png'
import ticket3 from '../image/ticket3.png'
import React, { Component, useState, useEffect } from 'react';
import {Arrow, ArrowTwo} from './SvgImporter'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
justify-content: center;
align-items: center;

`
const Ticket = styled.div`
height: 473px;
width: 350px;
background-color: #2F2B2B;
border-radius: 10% 0%;
`
const TextTitle= styled.div`
padding-top: 30px;
color: rgb(255,255,255, 0.5);
font-size: 18px;
font-weight: bold;
`
const TextDesc = styled.div`
color: #fff;
font-size: 18px;
padding-top: 20px;
`
const Date = styled.div`
color: rgb(255,255,255, 0.5);
font-size: 16px;
font-weight: bold;
`
const Down = styled.div`
padding-top: 45px;

display: flex;
justify-content: space-between;
`
const VoidBlock = styled.div`
padding-left: 30px;
`

const NextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <ArrowTwo
        className={className}
        style={{ ...style, height: 'auto', width: 'auto', display: 'block' }}
        onClick={onClick}
      />
    );
  }
  
  const PrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <Arrow
        className={className}
        style={{ ...style, height: 'auto', width: 'auto', display: 'block' }}
        onClick={onClick}
      />
    );
  }

  
    

const Playbill = () => {

    const [w, setW ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth)
        })
    }, [w])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: w >= 1200 ? 3 : w >= 820 ? 2 : 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,

        };

    return(
         <Wrapper>
             <Container>
             <Slider {...settings}>
                     <VoidBlock>
                 <Ticket>
                     <img src={ticket1}></img>
                     <TextTitle>Clandler, AZ</TextTitle>
                     <TextDesc>The Park at Wild Horse Pass</TextDesc>
                     <Down>
                     <Date>Apr 02 2021</Date>
                     <button style={{color: 'white', backgroundColor: '#7A66CC', border: 'none', width: '150px', height: '50px', borderRadius: '20% 5%'}}><p style={{fontSize: '18px', fontWeight: 'bold'}}>Tickets</p></button>
                     </Down>
                 </Ticket>
                 </VoidBlock>
                 <VoidBlock>
                 <Ticket>
                     <img src={ticket1}></img>
                     <TextTitle>Clandler, AZ</TextTitle>
                     <TextDesc>The Park at Wild Horse Pass</TextDesc>
                     <Down>
                     <Date>Apr 02 2021</Date>
                     <button style={{color: 'white', backgroundColor: '#7A66CC', border: 'none', width: '150px', height: '50px', borderRadius: '20% 5%'}}><p style={{fontSize: '18px', fontWeight: 'bold'}}>Tickets</p></button>
                     </Down>
                 </Ticket>
                 </VoidBlock>
                 <VoidBlock>
                 <Ticket>
                     <img src={ticket1}></img>
                     <TextTitle>Clandler, AZ</TextTitle>
                     <TextDesc>The Park at Wild Horse Pass</TextDesc>
                     <Down>
                     <Date>Apr 02 2021</Date>
                     <button style={{color: 'white', backgroundColor: '#7A66CC', border: 'none', width: '150px', height: '50px', borderRadius: '20% 5%'}}><p style={{fontSize: '18px', fontWeight: 'bold'}}>Tickets</p></button>
                     </Down>
                 </Ticket>
                 </VoidBlock>
                 <VoidBlock>
                 <Ticket>
                     <img src={ticket1}></img>
                     <TextTitle>Clandler, AZ</TextTitle>
                     <TextDesc>The Park at Wild Horse Pass</TextDesc>
                     <Down>
                     <Date>Apr 02 2021</Date>
                     <button style={{color: 'white', backgroundColor: '#7A66CC', border: 'none', width: '150px', height: '50px', borderRadius: '20% 5%'}}><p style={{fontSize: '18px', fontWeight: 'bold'}}>Tickets</p></button>
                     </Down>
                 </Ticket>
                 </VoidBlock>
                 </Slider>
             </Container>
        </Wrapper>
    );
// }
}
export default Playbill;