import React, {Component} from "react";
import {Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, H3} from "native-base";
// source from: https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/CRNA/js/components/list/index.js

function Answer(props) {
    if (props.seeAnswer) {
        return <Text>{`The answer is:\n${props.answer}`}</Text>
    }
    else {
        return null
    }
}

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            correct: 0,
            seeAnswer: false
        }
    }

    render() {
        let deck = this.props.navigation.state.params.deck;
        if (undefined === deck) {
            return (<Container><Content><Text>Loading deck please wait..</Text></Content></Container>)
        }
        const length = deck.questions.length;
        const endOfQuiz = this.state.index  === length;

        if (endOfQuiz) {
            return (
                <Container>
                    <Content>
                        <Text
                            style={{ padding: 15 }}>{`Solved correctly: ${this.state.correct}\nOut of ${length}\nPercentage: ${Math.floor((this.state.correct / length) * 100)}`}</Text>
                        <Button full primary title='BackHome'
                                onPress={() => this.props.navigation.navigate('DeckList')}>
                            <Text>Back to decks list</Text>
                        </Button>
                    </Content>
                </Container>
            )
        }

        const {question, answer} = deck.questions[this.state.index];
        return (
            <Container>
                <Content>
                    <Text style={{ padding: 15 }}>{`Question: ${this.state.index + 1} out of ${length}`}</Text>
                    <Text>{`${question}`}</Text>
                    <Button full light
                            title="seeAnswer"
                            onPress={ () => this.setState( {seeAnswer: true} )}>
                        <Text>Show Answer</Text>
                    </Button>
                    <Answer seeAnswer={this.state.seeAnswer} answer={answer}/>
                    <Button full success title="Correct"
                            onPress={ () => this.setState( (state) => ({
                                                                        ...state,
                                                                        index: state.index + 1,
                                                                        correct: state.correct + 1,
                                                                        seeAnswer: false
                                                                        })
                                  )}>
                        <Text>Correct</Text></Button>
                    <Button full warning title="Incorrect"
                            onPress={ () => this.setState( (state) => ({
                                                                        ...state,
                                                                        index: state.index + 1,
                                                                        seeAnswer: false
                                                                        })
                                  )}
                    ><Text>Incorrect</Text></Button>

                </Content>
            </Container>
        );
    }
}

export default Deck;
