import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {SecureStore} from "expo";
import {initData} from "./init_data";
import {Container} from "native-base";
import RootNavigator from "./RootNavigator";
import { setLocalNotification, clearLocalNotification} from './Notify'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: this.touch()
        }
    }

    componentDidMount() {
        this.loadStateFromStorage();

        clearLocalNotification()
            .then(setLocalNotification)
    }

    render() {
        return (
            <RootNavigator screenProps={{
                decks: this.state.data,
                onAddCardSubmit: this.onAddCardSubmit.bind(this),
                onAddDeckSubmit: this.onAddDeckSubmit.bind(this),
                touch: this.state.touch
              }}/>
        );
    }

    onAddCardSubmit(deckTitle, question, answer) {
        let arr = [...this.state.data[deckTitle].questions,...[{question,answer}]];
        let obj = {};
        obj[deckTitle] = {title: deckTitle,questions: arr};
        let new_state = {...this.state.data,...obj};
        this.saveData(new_state);
    }

    onAddDeckSubmit(deckTitle){
        let obj = {};
        obj[deckTitle] = {title: deckTitle,questions: []};
        let new_state = {...this.state.data,...obj};
        this.saveData(new_state);
    }

    loadStateFromStorage() {
        SecureStore.getItemAsync('yo').then((res) => {
            if(!res){
                res = '{}'
            }
            this.setState({data: JSON.parse(res)})
        });
    }

    resetData() {
        this.saveData(initData);
    }

    saveData(value) {
        SecureStore.setItemAsync('yo', JSON.stringify(value)).then((res) => {
                this.setState({data: value,touch: this.touch()});
            }
        ).catch((res) =>
            null
        );
    }

    touch(){
        return Date.now();
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
