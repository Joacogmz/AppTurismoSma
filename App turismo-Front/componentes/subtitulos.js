import React from "react";
import { Text } from "react-native";

const Subtitulos = (props) => {
  const { texto, font } = props;
  return (
    <Text
      style={{
        fontSize: font,
        color: "black",
        fontWeight: "bold",
       alignSelf: "center",
       top: 330
      }}
    >
      {texto}
    </Text>
  );
};

export function messageErr(props) {
  const { texto } = props;

  return <Text>{texto}</Text>;
}

export default Subtitulos;
