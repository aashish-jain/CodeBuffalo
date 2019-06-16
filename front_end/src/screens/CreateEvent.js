import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

class CreateEvent extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item success>
                        <Icon iconLeft active name='home' />
                        <Input placeholder='Hobby name' />
                    </Item>
              
                </Content>
            </Container>
        )
    }
}

export default CreateEvent;
