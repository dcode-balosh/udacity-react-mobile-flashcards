import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {SecureStore} from "expo";
import {initData} from "./init_data";
import {Container} from "native-base";
import RootNavigator from "./RootNavigator"


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.loadStateFromStorage();
    }

    render() {
        return (
            <RootNavigator screenProps={{ decks: this.state.data }}/>
        );
    }

    loadStateFromStorage() {
        SecureStore.getItemAsync('yo').then((res) => {
            console.log(`get items success`);
            this.setState({data: JSON.parse(res)})
        });
    }

    resetData() {
        this.saveData(initData);
    }

    saveData(value) {
        SecureStore.setItemAsync('yo', JSON.stringify(value)).then((res) =>
            console.log('finish save!')
        ).catch((res) =>
            console.log(`error save! ${res}`)
        );
        this.setState({data: value});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
