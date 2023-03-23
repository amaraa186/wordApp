import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const Word = props => {
  const {visible, currentWord} = props;

  var ding = new Sound(currentWord.audio, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log(
      'duration in seconds: ' +
        ding.getDuration() +
        'number of channels: ' +
        ding.getNumberOfChannels(),
    );
  });

  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);

  const playPause = () => {
    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

  return (
    <View>
      {visible ? (
        <View
          style={{
            width: 300,
            height: 360,
            backgroundColor: 'white',
            borderRadius: 30,
          }}>
          <View
            style={{
              width: 300,
              height: 280,
              backgroundColor: 'rgba(79, 66, 216, 1)',
              borderRadius: 30,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                {currentWord.engword}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'rgba(172, 165, 229, 1)',
                  fontWeight: 'bold',
                }}>
                {currentWord.pronounce}
              </Text>
            </View>

            <View
              style={{
                alignItems: 'flex-end',
                paddingBottom: 15,
                paddingRight: 15,
              }}>
              <TouchableOpacity onPress={playPause}>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: 'rgba(107, 96, 224, 1)',
                    borderRadius: 20,
                  }}>
                  <Image
                    source={require('../../../assets/icons/speaker.png')}
                    style={{height: 15, width: 15}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              {currentWord.type}: {currentWord.mglword}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: 300,
            height: 370,
            backgroundColor: 'rgba(79, 66, 216, 1)',
            borderRadius: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text style={{fontSize: 36, color: 'white', fontWeight: 'bold'}}>
              {currentWord.engword}
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'rgba(172, 165, 229, 1)',
                fontWeight: 'bold',
              }}>
              {currentWord.pronounce}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              paddingBottom: 15,
              paddingRight: 15,
            }}>
            <TouchableOpacity onPress={playPause}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'rgba(107, 96, 224, 1)',
                  borderRadius: 20,
                }}>
                <Image
                  source={require('../../../assets/icons/speaker.png')}
                  style={{height: 20, width: 20}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Word;
