import styled from 'styled-components'
import Logo from '../image/logo.png'
import { Apple, Spotify, Instagram, Youtube, Twitter, Facebook } from './SvgImporter'
import { keyframes } from 'styled-components'



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
justify-content: center;
display: flex !important;
text-align: center;
`
const Colon = styled.div`
display: flex;
flex-direction: column
`
const UpTitle = styled.div`
`
const Desc = styled.div`

`
const Title = styled.div`
text-transform:uppercase;
display: flex;
text-align:center;
padding-top:20px;
color: #fff;
justify-content: center;

h4{
    padding-right:20px;
}
`
const Social = styled.div`
padding-top: 50px;
display: flex;
flex-direction: row !important;
`
const Item = styled.div`
:not(:last-child){
    padding-right: 20px;
}
`
const Elipse = styled.div`
width:50px;
height:50px;
background-color: #7A66CC;
border-radius:40px;
text-align: center;
:hover {
transition: all 100ms cubic-bezier(0.715, -0.005, 1.000, 1.000);
transition-timing-function: cubic-bezier(0.715, -0.005, 1.000, 1.000);
    border: 8px solid #2C2C2C;
}
svg{
    padding-top:10px;
}
`
const Aurhor = styled.div`
padding-top: 150px;
color: rgb(255,255,255, 0.5);
font-size: 12px;
`


const Footer = () => {
    return(
        <Wrapper>
            <Container>
            <Colon>
                <UpTitle>
                    <img src={Logo}></img>
                </UpTitle>
                <Desc>
                    <Title>
                        <h4>Artist Manager:</h4>
                        <p>Jake Henny</p>
                    </Title>
                    <Title>
                        <h4>Email:</h4>
                        <p>jake@brightlightsofficial.com</p>
                    </Title>
                </Desc>
                <Social>
                    <Item>
                    <a href="https://apple.com/">
                        <Elipse>
                            <Apple/>
                        </Elipse>
                        </a>
                    </Item>
                    <Item>
                    <a href="https://Spotify.com/">
                        <Elipse>
                            <Spotify/>
                        </Elipse>
                        </a>
                    </Item>
                    <Item>
                    <a href="https://Instagram.com/">
                        <Elipse>
                            <Instagram/>
                        </Elipse>
                        </a>
                    </Item>
                    <Item>
                    <a href="https://Youtube.com/">
                        <Elipse>
                            <Youtube/>
                        </Elipse>
                        </a>
                    </Item>
                    <Item>
                    <a href="https://Twitter.com/">
                        <Elipse>
                            <Twitter/>
                        </Elipse>
                        </a>
                    </Item>
                    <Item>
                    <a href="https://Facebook.com/">
                        <Elipse>
                            <Facebook/>
                        </Elipse>
                        </a>
                    </Item>
                </Social>
                <Aurhor>
                    <p>©  2020 Shibou.</p>
                </Aurhor>
                </Colon>
            </Container>
        </Wrapper>
    )
}
export default Footer