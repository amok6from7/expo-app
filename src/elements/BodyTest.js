import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#ddd',
    backgroundColor: '#eee',
  },
});

export default BodyText;
