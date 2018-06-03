import React, { Component } from "react";
import LogInScreen from "./presenter";
import { Alert } from "react-native";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }
  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (username && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(username, password);
        if (!loginResult) {
          Alert.alert("Something went wrong, try agin");
          this.setState({
            isSubmitting: false
          });
        }
        //redux action
      } else {
        Alert.alert("All fields are required");
      }
    }
  };
}

export default Container;
