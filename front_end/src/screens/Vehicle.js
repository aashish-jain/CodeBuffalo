import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import DescriptionRow from '../components/DescriptionRow';
import DetailPage from '../components/DetailPage';

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            spinner: false
        };
    }

    componentWillMount() {
        const propsData = this.props.navigation.getParam('data');
        this.setState({ spinner: false, data: propsData });
    }

    _renderRow(data) {
        console.log(data);
        return <DetailPage data={data} />;
        //  return <DescriptionRow label={label} value={value}></DescriptionRow>;
    }

    render() {
        const { activity, type, participants, price, accessibility } = this.state.data;
        return (
            this._renderRow(this.state.data)
        );
        //   return (
        //       <Container>
        //           <StatusBar barStyle='light-content' />
        //           {this._renderRow('Activity', activity)}
        //           {this._renderRow('Type', type)}
        //           {this._renderRow('Participants', participants)}
        //           {this._renderRow('price', price)}
        //           {this._renderRow('Accessibility', accessibility)}
        //           <Spinner enable={this.state.spinner} />
        //       </Container>
        //   );
    }
}

export default Vehicle;