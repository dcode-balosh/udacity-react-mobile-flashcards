import DeckList from "./DeckListView/DeckList";
import Deck from "./DeckView/Deck";
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator(
    {
        DeckList: {screen: DeckList,
            navigationOptions: ({navigation}) => ({
                title: `Home`,
            }),
        },
        Deck: {screen: Deck,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.deck.title}`,
            }),}
    }
);

export default RootNavigator;