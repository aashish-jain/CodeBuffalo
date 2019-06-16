import React from 'react';
import { View, FlatList, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Container from '../components/Container';
import VehicleListItem from '../components/VehicleListItem';
import { API_VEHICLE_BASE } from '../config/api';
import Spinner from '../components/Spinner';
import { HEADER_BG } from '../config/colors';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            vehicles: [],
            nextPage: undefined
        };
    }

    componentDidMount() {
        this.setState({ spinner: true }, () => this._getVehicles(API_VEHICLE_BASE));
    }

    async _getVehicles(url) {
        try {
            const data = await this._fetchVehicles(url);
            // const { next, results } = data;
            this.setState({
                spinner: false,
                vehicles: [data]
            });
        } catch (err) {
            console.error(err);
        }

    }

    _fetchVehicles(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    resolve(res);
                })
                .catch(err => reject(err));
        });
    }

    handleClick = () => {
        Alert.alert(
            'Create Event Triggered',
        );
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle='light-content' />
                <TouchableOpacity style={styles.createButton}>
                    <View >
                        <FontAwesome name='plus-circle' size={35} style={styles.icon} onPress={() =>
                            this.props.navigation.navigate('create')
                        } />
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.vehicles}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <VehicleListItem
                                data={item}
                                onPress={() =>
                                    this.props.navigation.navigate('vehicle', {
                                        title: item.activity,
                                        data: item
                                    })
                                }
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <Spinner enable={this.state.spinner} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: HEADER_BG
    },
    createButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'flex-start',
        padding: 8
    }
});

export default Main;