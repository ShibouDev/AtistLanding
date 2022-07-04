import React from "react";
import styled from 'styled-components'
import { Audio } from './SvgImporter'
import PictureOne from '../image/AboutUsOne.png'
import PictureTwo from '../image/AboutUsTwo.png'


const Wrapper = styled.div `
width: 100%;
background-color: #1C1B21;
`
const Container = styled.div`
width: 100%;
margin-right: auto;
margin-left: auto;
max-width: 1170px;
padding-top: 350px;
display: flex;
align-items:left;
`
const TextTitle = styled.div`
color: #fff;
font-size: 38px;
`

const TextBlock = styled.div`
padding-top: 20px;
width: 80%;
display: flex;
justify-content: center;
color: #fff;
flex-direction: column;

`
const UpTitle = styled.div`
display: flex;
`
const ListAchievement = styled.div`
padding-top: 30px;
`
const ItemAchievement = styled.div`
display: flex;
align-items: center;
`
const Icon = styled.div`
width: 30px;
height: 30px;
background-color: #7A66CC;
border-radius: 40% 10%;
`
const Info = styled.div`
color: #fff;
font-size: 18px;
padding-left: 20px;
width: 60%;
`
const FirstLine = styled.div`
display: flex;
`
const SecondLine = styled.div`
display: flex;
`
const Achievements = styled.div`
`
const Photo = styled.div`
display: flex;
`

const Up = styled.img`
padding-left: 50px;
object-fit: none;
`
const TextInfo = styled.div`
display: flex;
flex-direction: column;
`


const AboutUs = () => {
        return (
            <Wrapper>
                <Container>
                <TextInfo>
                <UpTitle>
                <Audio style = {{paddingRight: '30px' }}/>
                    <TextTitle>
                        <h4>Bright Lights</h4>
                    </TextTitle>
                </UpTitle>
                <TextBlock>
                        <p>Bright Lights is a multi-Grammy nominated singer, songwriter, DJ and record producer. She has written for numerous 
                        pop stars including Britney Spears, Justin Bieber, Usher and Beyoncé. Her catalog has amassed over 1 billion streams worldwide.</p> <p style={{marginTop: '10px'}}> More than 100 million of those streams can be attributed to her artist career and include such hits as Porter Robinson's "Language," 3LAU's "How You Love Me" and her own single "Runaway." She was also a featured vocalist on Zedd's #1 Clarity album. Her latest music video, "Put It Down," reached 1 million streams in the first week, releasing independently. Bright Lights is currently in the studio working on a self-produced album slated for release in 2020.</p> 
                </TextBlock>
                
                <Achievements>
                <ListAchievement>
                    <FirstLine>
                    <ItemAchievement>
                        <Icon/>
                        <Info>
                            <p>Based in: Los Angeles</p>
                        </Info>
                    </ItemAchievement>
                    <ItemAchievement style={{paddingLeft:'40px'}}>
                        <Icon/>
                        <Info>
                            <p>Based in: Los Angeles</p>
                        </Info>
                    </ItemAchievement>
                    </FirstLine>
                </ListAchievement>
                <ListAchievement>
                    <SecondLine>
                    <ItemAchievement>
                        <Icon/>
                        <Info>
                            <p>Based in: Los Angeles</p>
                        </Info>
                    </ItemAchievement>
                    <ItemAchievement style={{paddingLeft:'40px'}}>
                        <Icon/>
                        <Info>
                            <p>Based in: Los Angeles</p>
                        </Info>
                    </ItemAchievement>
                    </SecondLine>
                </ListAchievement>
                </Achievements>
                </TextInfo>
                <Photo>
                <Up src={PictureOne}/>
                </Photo>
                </Container>
            </Wrapper>
        )
}
export default AboutUs