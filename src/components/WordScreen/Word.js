import React from "react";
import { Image, View, Text } from "react-native";
import data from "../../utils/Data";

const Word = (props) => {
  const { visible } = props;
  return (
    <View>
      {visible ? (
        <View
          style={{
            width: 300,
            height: 380,
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
            <View style={{ alignItems: "center", paddingTop: 10 }}>
              <Text
                style={{ fontSize: 28, color: "white", fontWeight: "bold" }}
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
            justifyContent: "center",
            alignItems: "center",
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
      )}
    </View>
  );
};

export default Word;
