import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Subtitulos from "../componentes/subtitulos";
import { Input } from "../componentes/input";
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';


const Newpublish = ({ navigator }) => {

  const [image, setImage] = useState(null);
  const selectImage = () => {

    let options = {
      StorageOptions: {
        path: "image",
      }
    }

    launchImageLibrary(options, response => {
      console.log(response);
      ImagePicker.launchImageLibrary(
        {
          title: 'Select Image',
          cancelButtonTitle: 'Cancel',
          takePhotoButtonTitle: 'Take Photo',
          chooseFromLibraryButtonTitle: 'Choose from Library',
        },
        (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            // Aquí puedes hacer algo con la imagen seleccionada, como cargarla a tu servidor o mostrarla en tu aplicación.
            setImage(response.uri);
          }
        }
      );
    });
  };


  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <Subtitulos
          texto="¿Encontraste una Excursión? ¡Publicala!"
          font={20}
        ></Subtitulos>
      </ScrollView>
      <SafeAreaView>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, }} />}
        <Button on style={{ Top: 5, alignItems: 'center' }} title="Seleccionar imagen" onPress={selectImage} />
      </SafeAreaView>
    </View>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    padding: 5,
    gap: 5
  },
});

export default Newpublish;