import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Fragment, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { GREEN_TEXT } from '../config/colors';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import DescriptionRow from '../components/DescriptionRow';


const SCREEN_W = Dimensions.get('screen').width;
const SCREEN_H = Dimensions.get('screen').height;
const ICON_SIZE = 28
class DetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: props.data
        }
    }

    handleClick = () => {
        Alert.alert(
            'Join Requested. You will be notified soon!!!',
        );
    }

    render() {
        const { activity, type, accessibility, price, participants } = this.state.values;
        return (
            <Container style={Styles.container}>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Body>
                                <Image source={require('../images/hobby.png')} style={Styles.imageStyle} />
                                <Text style={Styles.title}>{activity}</Text>
                                <View style={Styles.voteRow}>
                                    <Button transparent >
                                        <Ionicons name='ios-heart' size={ICON_SIZE - 5} style={Styles.icon} />
                                        <Text style={Styles.participants}>120 upvotes</Text>
                                    </Button>
                                    <Button transparent>
                                        <Ionicons name='ios-heart-dislike' size={ICON_SIZE - 5} style={Styles.icon} />
                                        <Text style={Styles.participants}>28 downvotes</Text>
                                    </Button>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 1 }}>
                        <CardItem>
                            <Body>
                                <View style={Styles.row}>
                                    <View style={Styles.labelView}>
                                        <Ionicons name='ios-pricetags' size={ICON_SIZE - 5} style={{ color: GREEN_TEXT }} />
                                        <Text style={Styles.Category}> Category: {type}</Text>
                                    </View>
                                    <View style={Styles.valueView}>
                                        <FontAwesome
                                            name='universal-access'
                                            size={ICON_SIZE - 6}
                                            style={{ color: GREEN_TEXT }}
                                        />
                                        <Text style={Styles.Category}> Accessibility: {accessibility}</Text>
                                    </View>
                                </View>
                                <View style={Styles.row}>
                                    <View style={Styles.labelView}>
                                        <Ionicons name='ios-people' size={ICON_SIZE - 5} style={{ color: GREEN_TEXT }} />
                                        <Text style={Styles.Category}> Participants: {participants}</Text>
                                    </View>
                                    <View style={Styles.valueView}>
                                        <FontAwesome
                                            name='dollar'
                                            size={ICON_SIZE - 6}
                                            style={{ color: GREEN_TEXT }}
                                        />
                                        <Text style={Styles.Category}> Price: {price}</Text>
                                    </View>
                                </View>
                                <View style={Styles.row}>
                                    <FontAwesome
                                        name='info-circle'
                                        size={ICON_SIZE - 6}
                                        style={{ color: GREEN_TEXT }}
                                    />
                                    <Text style={Styles.Category}>Description:</Text>
                                </View>
                                <View>
                                    <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                                        This is a description of the activity which includes any detail about the activity that the participant should be aware of.
                                        It includes details like location, TIme and other related stuffs.
                                    </Text>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <Content>
                            <Button full danger onPress={this.handleClick}>
                                <Text>Join Hobby</Text>
                            </Button>
                        </Content>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    title: {
        fontSize: 25,
        color: GREEN_TEXT,
        padding: 5
    },
    imageStyle: {
        height: SCREEN_H * 0.5,
        width: SCREEN_W,
        flex: 1
    },
    icon: {
        color: 'red'
    },

    participants: {
        fontSize: 16,
        color: 'red'
    },
    Category: {
        fontSize: 16,
        color: GREEN_TEXT
    },
    voteRow: {
        flex: 1,
        flexDirection: 'row'
    },
    row: {
        height: 25,
        flexDirection: 'row',
        marginBottom: 10
    },
    labelView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    valueView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
});

export default DetailPage;