import React from 'react';
import { View } from 'react-native';
import { styles } from '../../../styles/headers/BasicHeaderStyles';

const BasicHeader = ({leftComponent, middleComponent, rightComponent}) =>  {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {leftComponent}
        </View>
        <View style={styles.middleContainer}>
          {middleComponent}
        </View>
        <View style={styles.rightContainer}>
          {rightComponent}
        </View>
      </View>
    );
}

export default BasicHeader;