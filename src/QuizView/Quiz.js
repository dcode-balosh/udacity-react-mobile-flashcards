import React, {Component} from "react";
import {Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem,H1} from "native-base";
// source from: https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/CRNA/js/components/list/index.js
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            correct: 0
        }
    }

    render() {
        let deck = this.props.navigation.state.params.deck;
        if(undefined === deck){
            return (<Container><Content><Text>Loading deck please wait..</Text></Content></Container>)
        }
        const length = deck.questions.length;
        return (
            <Container>
                <Content>
                    <H1 style={{ padding: 15 }}>{`Question: ${this.state.index} out of ${length} Cards\nAnswered correctly: ${this.state.correct}`}</H1>
                </Content>
            </Container>
        );
    }
}

export default Deck;
