//https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/App.js
import Expo from "expo";
import React from "react";
import App from "./src/App";

export default class AppLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return <App />;
    }
}
