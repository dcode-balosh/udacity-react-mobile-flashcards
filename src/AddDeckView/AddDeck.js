//source from https://docs.nativebase.io/Components.html#Form
//and https://raw.githubusercontent.com/jamesknelson/raw-react-part-2/master/ContactForm.js
import React, {Component} from "react";
import {Container, Header, Content, Form, Item, Input, Button, Text} from "native-base";
export class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.screenProps.onAddDeckSubmit(
            this.state.title
        );
        this.props.navigation.navigate('DeckList');
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Title"
                                   onChangeText={(title) => this.setState({title})}
                                   value={this.state.title}
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


