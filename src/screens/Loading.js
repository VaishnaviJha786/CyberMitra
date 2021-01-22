import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default class Loading extends React.Component {
    componentDidMount() {
        auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Options' : 'Home')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})