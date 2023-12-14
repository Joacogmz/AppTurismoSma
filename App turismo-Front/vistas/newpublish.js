import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button, SafeAreaView, Image } from "react-native";
import Constants from "expo-constants";
import Subtitulos from "../componentes/subtitulos";
import * as ImagePicker from 'expo-image-picker';
import { Input } from "../componentes/input";


const Newpublish = ({ navigator }) => {
  const [producto, setProducto] = useState("");


  const [image, setImage] = useState(null);

  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Se necesita acceso a la galería de imagenes");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      console.log("Selección de imagen cancelada")
      setImage(result.uri)
      return;
    }
    console.log("URI de la imagen seleccionada:", result.uri);
    setImage(result.uri)
  };

  return (
    <View style={styles.container}>
      <View style={{top: 100}}>
      <Input
          texto="Nombre de la excursión"
          tipo="text"
          ico=""
          cambios={setProducto}
        ></Input>
        <Input
          texto="Descripción"
          tipo="text"
          ico=""
          cambios={setProducto}
        ></Input>
      </View>
        <Subtitulos texto="¿Encontraste una Excursión? ¡Publicala!" font={20} />
        <View style ={{top: 80}}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Button title="Seleccionar imagen" onPress={selectImage} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    padding: 5,
    gap: 5,
  },
});

export default Newpublish;




