import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { styles } from '../../../styles/headers/BasicHeaderStyles';

const HeaderLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.containerDefault}>
      {children}
    </SafeAreaView>
  );
}

export default HeaderLayout;