import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import {
    VEHICLE_BG,
    VEHICLE_NAME_COLOR,
    VEHICLE_MODEL_COLOR,
    VEHICLE_ITEM_ICON_COLOR,
    VEHICLE_ITEM_INFO_COLOR,
    SHADOW_COLOR
} from '../config/colors';
import { Haptic } from 'expo';

const SCREEN_W = Dimensions.get('screen').width;
const ICON_SIZE = 28;

export default props => {
    const { activity, type } = props.data;
    return (
        <TouchableOpacity
            onPress={() => {
                if (Platform.OS === 'ios') {
                    Haptic.impact(Haptic.ImpactFeedbackStyle.Light);
                }
                props.onPress();
            }}
            style={[styles.mainView, styles.shadow]}
        >  
            <View style={[styles.row]}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={styles.nameText}>{activity}</Text>
                    <Text style={styles.modelText}>{type}</Text>
                </View>
            </View>
            <View style={[styles.row]}>
                <View style={[styles.row, styles.infoContainer]}>
                    <FontAwesome
                        name='drivers-license'
                        size={ICON_SIZE - 6}
                        style={styles.icon}
                    />
                </View>
                <View style={[styles.row, styles.infoContainer]}>
                    <Ionicons name='ios-people' size={ICON_SIZE} style={styles.icon} />
                </View>
                <View style={[styles.row, styles.infoContainer]}>
                    <AntDesign name='dropbox' size={ICON_SIZE} style={styles.icon} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        height: SCREEN_W * 0.3,
        width: SCREEN_W * 0.9,
        padding: 8,
        margin: 8,
        borderRadius: 5
    },
    shadow: {
        elevation: 4,
        shadowOffset: { height: 4, width: 0 },
        // shadowColor: SHADOW_COLOR,
        shadowOpacity: 0.8,
        shadowRadius: 5,
        backgroundColor: VEHICLE_BG
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    nameText: {
        fontSize: 16,
        fontWeight: '600',
        color: VEHICLE_NAME_COLOR
    },
    modelText: {
        fontSize: 14,
        color: VEHICLE_MODEL_COLOR
    },
    icon: {
        margin: 4,
        marginRight: 10,
        color: VEHICLE_ITEM_ICON_COLOR
    },
    infoContainer: {
        alignItems: 'center'
    },
    countText: {
        fontSize: 16,
        color: VEHICLE_ITEM_INFO_COLOR
    }
});