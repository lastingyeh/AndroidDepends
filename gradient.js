/**
 * Created by yuhung on 2016/11/23.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
}from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import HelloWorld from './HelloWorld.js';

class Gradient extends Component {

    constructor(props) {
        super(props);
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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height: 100,
        padding: 20
    }
});

export default Gradient;