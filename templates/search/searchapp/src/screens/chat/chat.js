import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Header, Button, Title, Content, Text } from 'native-base';
import { PAGES } from '../../utils/constants';

class ChatPage extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Title>{PAGES.CHAT.name}</Title>
                </Header>
                <Content>
                    <Text>Demo content for ChatPage</Text>
                </Content>
            </Container>
        );
    }
}

export default ChatPage;