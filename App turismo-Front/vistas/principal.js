import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import React from 'react';
import { BotonL, BotonR } from '../componentes/botones';
import { useState } from "react";
import { LogCheck } from "../api"
import Subtitulo from "../componentes/subtitulos";


const imageSMA = '../assets/sma.jpg';

function Login({ navigation }) {


  const [email, setEmail] = useState(""); //en este estado se guardan el email
  const [password, setPassword] = useState("");// en este estado se guardan el password
  const [errorMessage, setErrorMessage] = useState("");// en este estado se guada el mensaje de error

  const handleLogin = async (email, password) => {
    try{
      const Data = await LogCheck(email, password)

      console.log("handle:",email, password)

      if (Data.success) {
        navigation.navigate("TabNavs")
      } else {
        console.log("Error")
        setErrorMessage("usuario o contraseña incorrecto");
      }
    }
    catch(error){
      console.error(error);
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SMA</Text>
      <Text style={styles.subtitulo}>Turismo</Text>
      <Text style={styles.subtitulo2}>Inicio de sesión</Text>
      <Text style={styles.subtitulo3}>¿No tenes cuenta?</Text>
      <TextInput placeholder="Email" tipo="email" ico="account" onChangeText={setEmail} style={(styles.textInput)} />
      <TextInput placeholder="Contraseña" tipo="numeric" ico="eye" onChangeText={setPassword} style={(styles.textInput)} />
      <StatusBar backgroundColor={"red"} />
      <ImageBackground source={require(imageSMA)} resizeMode='cover' style={styles.image}>
        <View style={styles.container}>
        </View>
        <View style={styles.botonLogin}>
          <BotonL textoL="Ingresar" onPres={() => { 
            console.log(email, password)
            if (
              email.trim().length !== 0 &&
              password.trim().length !== 0 
            ) {
              handleLogin(email, password)
            } else {
              setErrorMessage("Ingresar Email y Contraseña");
            }
            
            if (true) {
              handleLogin(email, password)
            } else {
              setErrorMessage("Datos incorrectos")                
            }
            if (email === "" || password === "") {
            setErrorMessage("ingresar mail y contraseña")                
            } else {
              handleLogin(email, password)
            }
          }} />
           {errorMessage ? <Subtitulo texto={errorMessage} font={15} /> : null}  
        </View>
        <View style={styles.botonRegistro}>
          <BotonR textoR="Registrarse" onPres={() => navigation.navigate('Sigup')} />
          
        </View>
      </ImageBackground>

    </View>

  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    top: -40,
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitulo: {
    top: -50,
    fontSize: 25,
    color: 'black',
  },

  subtitulo2: {
    top: -30,
    fontSize: 30,
  },

  subtitulo3: {
    top: 245,
  },

  textInput: {
    paddingStart: 30,
    borderWidth: 1,
    borderColor: 'black',
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    top: -45,
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
  },

});

export default Login;
