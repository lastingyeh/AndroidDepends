/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NativeModules,
    View,
    Text,
    StyleSheet

} from 'react-native';

class RunObjectCMethod extends Component {

    constructor(props) {
        super(props);

        var CalendarManager = NativeModules.CalendarManager;

        CalendarManager.addEvent('Birthday Party', '4 Private Drive, Surrey');
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Object C calling</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        fontSize: 24,
        color: '#FF0000'
    }
});

AppRegistry.registerComponent('AndroidDepends', () => RunObjectCMethod);
