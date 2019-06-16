import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import Vehicle from '../screens/Vehicle';
import Menu from '../screens/Menu';
import CreateEvent from '../screens/CreateEvent';
import { LABEL_COLOR, VEHICLE_BG, HEADER_TITLE_COLOR, HEADER_BG } from '../config/colors';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';


const mainNaVigator = createStackNavigator({
    main: {
        screen: Main,
        navigationOptions: ({ navigation }) => ({
            title: 'Hobbies',
            headerRight: (
                <Button iconRight transparent light style={{ fontSize: 25 }} onPress={() =>
                    navigation.navigate('menu')
                } >
                    <Icon name='person' />
                </Button>
            ),
            headerTintColor: HEADER_TITLE_COLOR,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: HEADER_BG,
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: HEADER_TITLE_COLOR
            }
        })
    },
    vehicle: {
        screen: Vehicle,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`,
            headerTintColor: HEADER_TITLE_COLOR,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: HEADER_BG,
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: HEADER_TITLE_COLOR
            }
        })
    },
    menu: {
        screen: Menu,
        navigationOptions: {
            title: 'User Menu',
            headerTintColor: HEADER_TITLE_COLOR,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: HEADER_BG,
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: HEADER_TITLE_COLOR
            }
        }
    },
    create: {
        screen: CreateEvent,
        navigationOptions: {
            title: 'Create Hobby',
            headerTintColor: HEADER_TITLE_COLOR,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: HEADER_BG,
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: HEADER_TITLE_COLOR
            }
        }
    }
});

export default createAppContainer(mainNaVigator); 