import React from 'react'
import DeckList from "./DeckListView/DeckList";
import Deck from "./DeckView/Deck";
import {StackNavigator} from "react-navigation";
import AddCard from "./AddCardView/AddCard";

const RootNavigator = StackNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: ({navigation}) => ({
                title: `Home`,
            }),
        },
        Deck: {
            screen: Deck,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.deck.title}`,
            }),
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: ({navigation}) => ({
                title: `Add card to deck ${navigation.state.params.deck.title}`,
            }),
        }
    }
);

export default RootNavigator;