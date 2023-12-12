import React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from 'react-native';
import  QRCode from "react-qr-code";
 


const Descuentos = ({navigation}) => {
    return(
        <View>
        <View style={styles.qr}>
            <QRCode value ="Aplica para un -10% de descuento en la excursion elegida"></QRCode>
        </View> 
        <Text style={styles.subtitulo}>¡Llevá este código QR a cualquiera de las siguientes agencias adheridas y obtené un descuento del 10%!</Text>
        <Text style={styles.subtitulo2}> - Destino Andino</Text>
        <Text style={styles.subtitulo2}> - Lanín</Text>
        <Text style={styles.subtitulo2}> - El Claro</Text>
        </View>
        
    )
};

    const styles = StyleSheet.create({
    
        subtitulo: {
            fontSize:25,
            color: 'black',
            alignSelf: 'center',
            margin: 20,
            top: -200,
        },

        subtitulo2: {
            fontSize:20,
            color: 'black',
            alignSelf: 'center',
            margin: 20,
            top: -180,
        },

        qr:{
            alignSelf: 'center',
            top: 500,
        },

    });

    export default Descuentos;
