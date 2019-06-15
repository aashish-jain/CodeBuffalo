import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import Vehicle from '../screens/Vehicle';
import { LABEL_COLOR, VEHICLE_BG, HEADER_TITLE_COLOR, HEADER_BG } from '../config/colors';

const mainNaVigator = createStackNavigator({
    main: {
        screen: Main,
        navigationOptions: {
            title: 'Hobbies',
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
    }
});

export default createAppContainer(mainNaVigator); 