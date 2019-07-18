import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Header, Button, Title, Content, Text } from 'native-base';
import { PAGES } from '../../utils/constants';

class WelcomePage extends Component {
    state = {
        name: "Jason"
    };
    render() {
        return (
            <Container>
                <Header>
                    <Title>{PAGES.WELCOME.name}</Title>
                </Header>
                <Content>
                    <Text>Demo content for Welcome</Text>
                </Content>
            </Container>
        );
    }
}

export default WelcomePage;