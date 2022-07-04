import styled from 'styled-components';
import Cover from '../image/artist.png'

const Wrapper = styled.div`
width: 100%;
background-color: #1C1B21;
`
const Container = styled.div`
width: 100%;
margin-left:auto;
margin-right:auto;
max-width:1170px;
padding-top: 200px;
padding-bottom: 200px;

`
const Block = styled.div`
width: 100%;
display: flex;
background-color:#1C1B21;
height:313px;
border: 2px solid #fff;
border-radius: 8% 0%;
color: #fff;
justify-content: center;
`
const TextDesc = styled.div`
width: 75%;
margin-left: 50px;

`
const Separator = styled.div`
width: 75%;
height: 2px;
background-color: #fff;
margin-left: 50px;
margin-top: 20px;
`
const Link = styled.div`
margin-left: 50px;
padding-top: 20px;
font-size: 28px;
p{
    color:#7A66CC;    
}
a{
text-decoration: none;
}
`
const Picture = styled.div`
position: relative;
bottom: 100px;
padding-right: 80px;
`
const BlockWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Artist = () => {
    return (
        <Wrapper>
            <Container>
                <Block>
                <BlockWrapper>
                    <TextDesc>
                    “In an age where mainstream music is designed to be as
                    easily consumed as possible, listening to Bright Lights is
                    refreshing, to say the least. Her sound is perfect for radio
                    but complex enough to separate her from other pop newcomers.”
                    </TextDesc>
                    <Separator/>
                    <Link>
                        <a href="http://vk.com/shibouhelpme"><p>Help me, Shibou</p></a>
                    </Link>
                    </BlockWrapper>
                    <Picture>
                    <img src={Cover}></img>
                </Picture>
                </Block>
            </Container>
        </Wrapper>
    )
}
export default Artist;