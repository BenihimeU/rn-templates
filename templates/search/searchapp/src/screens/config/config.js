import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Header, Button, Title, Content, Text } from 'native-base';
import { PAGES } from '../../utils/constants';

class ConfigPage extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Title>{PAGES.CONGIFUIRE.name}</Title>
                </Header>
                <Content>
                    <Text>Demo content for ConfigPage</Text>
                    
                </Content>
            </Container>
        );
    }
}

export default ConfigPage;