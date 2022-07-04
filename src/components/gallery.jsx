import styled from 'styled-components'
import slide1 from '../image/slide1.png'
import slide2 from '../image/slide2.png'
import slide3 from '../image/slide3.png'
import slide4 from '../image/slide4.png'
import slide5 from '../image/slide5.png'
import Slider from 'react-slick'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import {Close} from './SvgImporter'
import {useState} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  &-content {
    border-radius:10px;
    background: rgba(0, 0, 0, 0.5);
    width: 800px;
  }
`;

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
display: flex !important;
`
const LeftColumn = styled.div`
&:hover{
    opacity: 0.2;
    transition: all 300ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
}
p{
    position:relative;
    top:50%;
    left: 18%;
    font-size:28px;
    color: #fff;
    font-weight:bold;
}
`
const UpperBand = styled.div`
height: 235px;
width: 540px;
display: flex !important;
@media (max-width: 1150px){
    display:none !important;
}
`


const RightColumn = styled.div`
&:hover{
    opacity: 0.2;
    transition: all 300ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
}
p{
    position:relative;
    top:200px;
    left: 15%;
    font-size:28px;
    color: #fff;
    font-weight:bold;
}
`

const OneSlide = styled.div`
@media (max-width: 1150px){
    display:none;
}
&:hover{
    opacity: 0.2;
    transition: all 300ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
}
p{
    position:relative;
    top:120px;
    left: 10%;
    font-size:28px;
    color: #fff;
    font-weight:bold;
}
`
const TwoSlide = styled.div`
@media (max-width: 1150px){
    display:none;
}
&:hover{
    opacity: 0.2;
    transition: all 300ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
}
p{
    position:relative;
    top:120px;
    left: 10%;
    font-size:28px;
    color: #fff;
    font-weight:bold;
}
`
const ThreeSlide = styled.div`
@media (max-width: 1150px){
    display:none;
}
&:hover{
    opacity: 0.2;
    transition: all 300ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
}
p{
    position:relative;
    top:120px;
    left: 15%;
    font-size:28px;
    color: #fff;
    font-weight:bold;
}
`
const Colum = styled.div`
display: flex !important;
flex-direction: column;
`
const Verx = styled.div`
display: flex !important;
@media (max-width: 1150px){
    display:none;
}
`
const FullSlide = styled.div`
`
const SliderAll = styled.div`
width:280px;
`
const Navigate = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 20px;
padding-bottom: 20px;
p{
    font-size:22px;
}
`


const Gallery = () => {
    const [ modalOpen, setModalOpen ] = useState(false);

    const handleClickModalClose = () => setModalOpen(false);
    const handleClickModalOpen = () => setModalOpen(true);
    const banners = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
      } 
      const m = () => [slide1,slide1,slide1,slide1].map(
          n=>(
            <SliderAll>
             <img src={n}></img>
            </SliderAll>
          )
        )
      
    return (
        <Wrapper>
            <Container>
            <LeftColumn>
                <p>2020 Arizona</p>
                <img onClick={handleClickModalOpen} src={slide1}></img>
            </LeftColumn> 
            <StyledPopup open={modalOpen} closeOnDocumentClick onClose={handleClickModalClose}
                left="auto"
                right="auto"
                arrow="none"
                nested
                modal
                >
                <Navigate>
                <p style={{color: 'white'}}>Arizona 2020 tour. w/Dr.Dre</p>
                    <Close onClick={handleClickModalClose}/>
                    </Navigate>
                <Slider {...banners}>
                    {m()}
                </Slider>
                </StyledPopup>
                <UpperBand>
                <Colum>
                <Verx>
                <OneSlide>
                <p>2020 Arizona</p>
                <img src={slide2}></img>
                </OneSlide>
                <TwoSlide>
                <p>2020 Arizona</p>
                <img src={slide3}></img>
                </TwoSlide>
                </Verx>
                <ThreeSlide>
                <p style={{color : "#7A66CC"}}>New fest action deleted world</p>
                <img src={slide4}></img>
                </ThreeSlide>
                </Colum>
                </UpperBand>
                <RightColumn>
                <p>2020 Arizona</p>
                <img src={slide5}></img>
                </RightColumn>
            </Container>
        </Wrapper>
    )
}
export default Gallery

                