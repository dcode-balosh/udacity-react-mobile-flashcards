import React, {Component} from "react";
import {Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem} from "native-base";
// source from: https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/CRNA/js/components/list/index.js
class DeckList extends Component {
    render() {
        return (
            <Container>
                {/*<Button onPress={() => this.props.resetData()}>*/}
                {/*<Text>Reset Data</Text>*/}
                {/*</Button>*/}
                    {
                        this.props.screenProps.decks && (
                            <Content>
                                <Button full light
                                        name="AddDeck"
                                        onPress={() => this.props.navigation.navigate('AddDeck')}
                                        >
                                    <Text>Create Deck</Text>
                                </Button>
                                <List
                                    dataArray={Object.values(this.props.screenProps.decks).reduce((acu,obj) => ( acu.concat({title: obj.title, size: obj.questions.length})) , [] )}
                                    renderRow={data =>
                                                <ListItem button onPress={() => this.props.navigation.navigate(
                                                                                                                'Deck',
                                                                                                                {deck: this.props.screenProps.decks[data.title]})
                                                }>
                                                    <Text>
                    {`${data.title}${'\n'}${data.size} Cards`}
                                                    </Text>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>}
                                />
                            </Content>

                        )
                    }
            </Container>
        );
    }
}

export default DeckList;
