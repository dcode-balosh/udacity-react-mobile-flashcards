//source from https://docs.nativebase.io/Components.html#Form
import React, {Component} from "react";
import {Container, Header, Content, Form, Item, Input} from "native-base";
export class AddCard extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Question"/>
                        </Item>
                        <Item last>
                            <Input placeholder="Answer" />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}
export default AddCard;


