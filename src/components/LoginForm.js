import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component {
  onEmailChange(text) {
    
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abc@email.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextInput
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}
