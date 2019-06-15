import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const SCREEN_W = Dimensions.get('screen').width;
const SCREEN_H = Dimensions.get('screen').height;

class DetailPage extends Component {
    render() {
        return (
            <Container style={Styles.container}>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Body>
                                <Image source={require('../images/hobby.png')}
                                    style={Styles.imageStyle} />
                                <Text>
                                    Title
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        height: SCREEN_H
    },
    imageStyle: {
        height: SCREEN_H * 0.3,
        width: SCREEN_W,
        flex: 1
    }
});

export default DetailPage;