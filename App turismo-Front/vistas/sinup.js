import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, TextInput, ImageBackground, Text } from "react-native";
import { Boton } from "../componentes/botones";
import Subtitulo from "../componentes/subtitulos";
import { createUser } from "../api";

const rutaimg = "../assets/smaa.jpg";

function Sigup({ navigation })  {
  //hook de javascript para manejas los estados del componentes
  const [email, setEmail] = useState(""); //en este estado se guarda el email
  const [password, setPassword] = useState(""); //en este estado se guarda el password
  const [username, setUsername] = useState(""); //en este estado se guarda el username
  const [confirpassword, setConfirpassword] = useState(""); //en este estado se guarda el password
  const [errorMessage, setErrorMessage] = useState(""); // en este estado se guada el mensaje de error

  const handleSingup = async (username, email, password, confirpassword) => {
    console.log("handle:", username, email, password, confirpassword);
    try {
      const Data = await createUser(username, email, password, confirpassword);
      

    if (Data.success ) {
      navigation.navigate("TabsNavs");
    } else {
      console.log("Error")
      setErrorMessage("Datos incorrectos");
    }
  }
  catch(error){
    console.error(error);
  }
      {
        Data.status
          ? 400(setErrorMessage("ya existe un usuario con el email ingresado"))
          : setErrorMessage("no se pudo crear la cuenta, intente nuevamente");
      }
    }
  

  return (
   
  <View  styles={styles.container}>
      <TextInput placeholder="Nombre" tipo="name" ico="account" onChangeText={setUsername}style={(styles.textInput)}/>
      <TextInput placeholder="Email" tipo= "email" ico="account" onChangeText={setEmail} style={(styles.textInput)}/>
      <TextInput placeholder="Contraseña" tipo= "numeric" ico="eye" onChangeText={setPassword}style={(styles.textInput)}/>
      <TextInput placeholder="Repetir contrseña" tipo="numeric" ico="eye" onChangeText={setConfirpassword} style={(styles.textInput)}/>

      <ImageBackground source={require(rutaimg)} resizeMode='cover' style={styles.image3}></ImageBackground>
      <Text style={styles.titulo}>Registrate</Text>
      <Boton texto="Crear cuenta" onPres={() => {    
                console.log(username, email, password, confirpassword)
                      if (
                        email.trim().length !== 0 &&
                        password.trim().length !== 0 &&
                        username.trim().length !== 0 &&
                        confirpassword.trim().length !== 0
                      ) {
                        if (password === confirpassword) {
                          setErrorMessage("");
                          handleSingup(username, email, password,confirpassword);
                        } else {
                          setErrorMessage("Las contraseñas no coinciden");
                        }
                      } else {
                        setErrorMessage("Completar los datos");
                      }
      }}/>
              {errorMessage ? <Subtitulo texto={errorMessage} font={15} /> : null}  
    </View>
      
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },

  textInput: {
    paddingStart:30,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    paddingStart:20,
    width: '80%',  
    height:50 ,
    marginTop:20,
    borderRadius:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 360,
  }, 
  titulo:{
    fontWeight: 'bold',
    fontSize: 35,
    alignItems: 'center',
    textAlign: 'center',
    top: 20,
  },

  image3:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '75%',
  },
  
//   principal: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   sec1: {
//     flex: 0.5,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 650,
//   },
//   sec2: {
//     flex: 0.3,
//     alignItems: "center",
//     gap: 10,
//   },

});

export default Sigup;
