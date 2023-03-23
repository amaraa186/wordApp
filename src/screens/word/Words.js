import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Word from './Word';
import wds from '../../utils/Data';
import Toast from 'react-native-toast-message';

const Words = props => {
  const [visible, setVisible] = useState(false);
  const [typeWords, setTypeWords] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const title = props.route.params.title;

  useEffect(() => {
    wds.REALWORDS.filter(newwords => newwords.type == title).map(word =>
      setTypeWords(typeWords => [...typeWords, word]),
    );
  }, []);

  const onBack = () => {
    if (activeIndex == 0)
      return Toast.show({
        type: 'error',
        text1: 'Хамгийн эхний үг байна',
      });
    setVisible(false);
    setActiveIndex(activeIndex - 1);
  };

  const onForward = () => {
    if (typeWords.length == activeIndex + 1)
      return Toast.show({
        type: 'error',
        text1: 'Хамгийн сүүлийн үг байна',
      });
    setVisible(false);
    setActiveIndex(activeIndex + 1);
  };

  return (
    <View
      style={{justifyContent: 'space-around', alignItems: 'center', flex: 1}}>
      {typeWords.map(
        (currentData, i) =>
          activeIndex == i && (
            <Word visible={visible} currentWord={currentData.detail} key={i} />
          ),
      )}
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 300,
        }}>
        <TouchableOpacity onPress={onBack}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: 'black',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/icons/arrow_back.png')}
              style={{width: 40, height: 40}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: 'black',
              backgroundColor: visible ? 'rgba(255, 118, 64, 1)' : 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={
                visible
                  ? require('../../../assets/icons/visible.png')
                  : require('../../../assets/icons/invisible.png')
              }
              style={{width: 40, height: 40}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onForward}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: 'black',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/icons/arrow_forward.png')}
              style={{width: 40, height: 40}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Words;
