/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NativeModules,
    Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class RunObjectCMethod extends Component {

    constructor(props) {
        super(props);

        var CalendarManager = NativeModules.CalendarManager;

        CalendarManager.addEvent('Birthday Party', '4 Private Drive, Surrey');
    }

    render() {
        return (
            <LinearGradient colors={['#FFFFFF','#00A8A8']} style={styles.container}>
                <Text style={styles.welcome}>Object C calling</Text>
            </LinearGradient>
        );
    }
}

AppRegistry.registerComponent('AndroidDepends', () => RunObjectCMethod);
