import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const EconomyList = ({economyList}) => {  
   console.log('economyList', economyList);
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

          {/* <FlatList data={this.props.economyList}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=> {
                      return (
                        <View style={styles.itemContainer}>
                          <Text>
                            {item.date}
                            {item.category}
                          </Text>
                        </View>
                      )
                    }} /> */}

                    {/* // }} */}
        </View>     
      </ScrollView>
    </View>
  );  
}                 

export default EconomyList;