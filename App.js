import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import { SecureStore } from 'expo';
import {initData} from "./src/init_data";
export const dataKey = 'data'

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
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>{JSON.stringify(this.state)}</Text>
                <View>
                    <Button
                        onPress={() => this.resetData()}
                        title="Reset Data"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }

    loadStateFromStorage() {
        SecureStore.getItemAsync('yo').then((res) => {
            console.log(`get items success ${JSON.stringify(res)}`);
            this.setState({data: JSON.parse(res)})
        });
    }

    resetData(){
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
