//source from https://docs.nativebase.io/Components.html#Form
//and https://raw.githubusercontent.com/jamesknelson/raw-react-part-2/master/ContactForm.js
import React, {Component} from "react";
import {Container, Header, Content, Form, Item, Input, Button, Text} from "native-base";
export class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
            answer: null
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.screenProps.onAddCardSubmit(
            this.props.navigation.state.params.deck.title,
            this.state.question,
            this.state.answer
        );
        this.props.navigation.navigate('Deck',{deck: this.props.navigation.state.params.deck}
        );
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Question"
                                   onChangeText={(question) => this.setState({question})}
                                   value={this.state.question}
                            />
                        </Item>
                        <Item last>
                            <Input placeholder="Answer"
                                   onChangeText={(answer) => this.setState({answer})}
                                   value={this.state.answer}
                            />
                        </Item>
                        <Button title='submit'
                            onPress={(e) => this.onSubmit(e)}
                        >
                            <Text>Submit</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
export default AddCard;


