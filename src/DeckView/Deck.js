import React, {Component} from "react";
import {Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem} from "native-base";
// source from: https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/CRNA/js/components/list/index.js
class DeckList extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Deck</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Deck view, please work</Text>
                </Content>
            </Container>
        );
    }
}

export default DeckList;
