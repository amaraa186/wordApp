import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import data from '../../utils/Data';

const Item = ({category, navigate}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate('Words', {title: category.name})}>
      <View
        style={{
          backgroundColor: 'rgba(246, 246, 246, 1)',
          borderRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30,
          width: 300,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 180,
          }}>
          <Image source={category.url} style={{width: 30, height: 30}} />
          <View style={{width: 10}} />
          <Text style={{fontSize: 18, color: 'black', flexWrap: 'wrap'}}>
            {category.name}
          </Text>
        </View>
        <Text style={{fontSize: 12, color: 'black'}}>
          {category.wordCount} words
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(79, 66, 216, 1)',
      }}>
      <View style={{paddingVertical: 25}}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: 'white'}}>
          IELTS WORD
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          width: '100%',
        }}>
        <View
          style={{
            padding: 45,
            justifyContent: 'space-evenly',
          }}>
          <FlatList
            data={data.CATEGORIES}
            renderItem={({item}) => (
              <Item category={item} navigate={navigation} />
            )}
            keyExtractor={item => item.name}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
