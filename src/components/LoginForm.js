import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abc@email.com"
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
