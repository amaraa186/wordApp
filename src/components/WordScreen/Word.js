import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import data from "../../utils/Data";

const Word = (props) => {
  const { visible } = props;
  return (
    <View>
      {visible ? (
        <View
          style={{
            width: 300,
            height: 360,
            backgroundColor: "white",
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: 300,
              height: 280,
              backgroundColor: "rgba(79, 66, 216, 1)",
              borderRadius: 30,
            }}
          >
            <Image
              source={data.WORDS.img}
              style={{ width: 300, height: 175, borderRadius: 30 }}
            />
            <View style={{ paddingTop: 10 }}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 26, color: "white", fontWeight: "bold" }}
                >
                  {data.WORDS.engword}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: "rgba(172, 165, 229, 1)",
                    fontWeight: "bold",
                  }}
                >
                  {data.WORDS.pronounce}
                </Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  marginTop: 60,
                  marginLeft: 250,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      padding: 10,
                      backgroundColor: "rgba(107, 96, 224, 1)",
                      borderRadius: 20,
                    }}
                  >
                    <Image
                      source={require("../../../assets/icons/speaker.png")}
                      style={{ height: 15, width: 15 }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {data.WORDS.type}: {data.WORDS.mglword}
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: 300,
            height: 370,
            backgroundColor: "rgba(79, 66, 216, 1)",
            borderRadius: 30,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
              {data.WORDS.engword}
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: "rgba(172, 165, 229, 1)",
                fontWeight: "bold",
              }}
            >
              {data.WORDS.pronounce}
            </Text>
          </View>

          <View
            style={{
              alignItems: "flex-end",
              paddingBottom: 15,
              paddingRight: 15,
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  padding: 10,
                  backgroundColor: "rgba(107, 96, 224, 1)",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={require("../../../assets/icons/speaker.png")}
                  style={{ height: 20, width: 20 }}
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
