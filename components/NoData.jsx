import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { StyleSheet } from "react-native";

const { height } = Dimensions.get('window');

var styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height / 3
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
  }
})

export default class NoDataCell extends React.Component {
  render() {
    var { resourceName } = this.props;

    return (
      <Container>
        <Content>
          <View style={styles.view}>
            <Text style={styles.text}>No {resourceName} yet - you could be the first!</Text>
          </View>
        </Content>
      </Container>
    )
  }
}