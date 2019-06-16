import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const SCREEN_H = Dimensions.get("screen").height;

export class Menu extends Component {
    render() {
        return (

            <Container>
                <Content>
                    <Button iconLeft bordered large full success style={{ height: SCREEN_H * 0.15 }}>
                        <FontAwesome name='dashcube' size={28} style={{ color: 'green' }} />
                        <Text>DashBoard</Text>
                    </Button>
                    <Button iconLeft bordered large full success style={{ height: SCREEN_H * 0.15 }}>
                        <FontAwesome name='wechat' size={28} style={{ color: 'green' }} />
                        <Text>Messages</Text>
                    </Button>
                    <Button iconLeft bordered large full success style={{ height: SCREEN_H * 0.15 }}>
                        <AntDesign name='addusergroup' size={28} style={{ color: 'green' }} />
                        <Text>Invites</Text>
                    </Button>
                    <Button iconLeft bordered large full success style={{ height: SCREEN_H * 0.15 }}>
                        <AntDesign name='database' size={28} style={{ color: 'green' }} />
                        <Text>Activities</Text>
                    </Button>
                    <Button iconLeft bordered large full success style={{ height: SCREEN_H * 0.15 }}>
                        <AntDesign name='setting' size={28} style={{ color: 'green' }} />
                        <Text>Settings</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Menu;
