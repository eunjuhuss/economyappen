import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const EconomyList = ({economyList}) => {  
  return (
    <View>
      <ScrollView>  
        <View>
          { economyList && economyList.map(
            economy=>{
              return (
                <Text key={economy.id}>
                  {economy.category}
                </Text>
              )
          })}
        </View>     
      </ScrollView>
    </View>
  );  
}

export default EconomyList;