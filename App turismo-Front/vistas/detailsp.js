import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from "react-native";
import { BotonDescuento, } from "../componentes/botones";
import { Tarjetas } from "../componentes/cards";
import Constants from "expo-constants"
import { Portal } from "react-native-paper";
const imgG = '../assets/chapelco2.jpg'


const Detalles = ({ navigation, route }) => {
    const { producto } = route.params;
    const { id, nombre, img, descripcion, img2 } = route.params;
    const ruta = JSON.stringify(producto.img)


    return (

        <View style={estilos.container}>
            <Image source={require(imgG)} resizeMode='cover' style={estilos.imagen}></Image>
            <Text style={estilos.desc}>
                {producto.descripcion}
            </Text>
            
            <BotonDescuento textoD="¡Conseguí tu descuento %!" onPres={() => navigation.navigate('Descuentos')} />

        </View>
    );

}


const estilos = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        paddingTop: 15
    },

    desc: {
        alignItems: 'center',
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },

    imagen: {

        width: '90%',
        height: 270,
        borderRadius: 25,
        margin: 10,
        alignSelf: 'center',
    }
})
export default Detalles;