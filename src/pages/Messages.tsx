import Chat from '../components/Chat'
import ChatList from '../components/ChatList'
import ChatInfo from '../components/ChatInfo'
import Navbar from '../components/Navbar'

import styled from 'styled-components';

const Container = styled.div`
    background-color: #27292d;
    display: flex;
    width: 100%;
    overflow: hidden;
`

const Messages = () => {
    return (
        <>
            <Navbar />
            <Container>
                <ChatList />
                <Chat />
                <ChatInfo />
            </Container>
        </>
    )
}

export default Messages
