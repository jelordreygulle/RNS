import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import ServiceAction from '../actions/inventorylistserviceaction';
import { Container, Content, Picker, Button, Text } from "native-base";

export default class Inventory extends Component {
    render() {
        return (
            <Provider store={store}>
                <ServiceAction />
            </Provider>
        );
    }
}

