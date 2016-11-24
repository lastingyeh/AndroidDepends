/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    Text,
    AppRegistry,
    NativeModules
}from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

class Gradient extends Component {

    constructor(props) {

        super(props);

        var HelloWorld = NativeModules.HelloWorld;
        HelloWorld.greeting("bonnie");
    }

    render() {
        return (
            <LinearGradient colors={['#FFFFFF','#00A8A8']} style={styles.container}>
                <Text style={styles.welcome}>
                    A Lovely Gradient
                </Text>
            </LinearGradient>
        );
    }
}

AppRegistry.registerComponent('AndroidDepends', () => Gradient);
