import React, {Component} from "react";
import {Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem,H1} from "native-base";
// source from: https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/CRNA/js/components/list/index.js
class Deck extends Component {
    render() {
        let deck = this.props.screenProps.decks[this.props.navigation.state.params.deck.title];
        if(undefined === deck){
            return (<Container><Content><Text>Loading deck please wait..</Text></Content></Container>)
        }
        return (
            <Container>
                <Content>
                    <H1 style={{ alignSelf: "center",padding: 15 }}>{`${deck.questions.length}`} Cards</H1>
                    <Button full light title='Add Card'
                            onPress={() => this.props.navigation.navigate('AddCard',{deck: deck})}>
                        <Text>Add Card</Text>
                    </Button>
                    <Button full primary title='Start Quiz'
                            onPress={() => this.props.navigation.navigate('Quiz',{deck: deck})} >
                    <Text>Start Quiz</Text></Button>
                </Content>
            </Container>
        );
    }
}

export default Deck;
