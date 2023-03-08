import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Word from "./Word";

const Words = (props) => {
  const [visible, setVisible] = useState(false);
  const title = props.route.params.title;

  return (
    <View
      style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}
    >
      <Word visible={visible} />
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          width: 300,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: "black",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/icons/arrow_back.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: "black",
              backgroundColor: visible ? "rgba(255, 118, 64, 1)" : "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                visible
                  ? require("../../../assets/icons/visible.png")
                  : require("../../../assets/icons/invisible.png")
              }
              style={{ width: 40, height: 40 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 20,
              shadowColor: "black",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/icons/arrow_forward.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Words;
