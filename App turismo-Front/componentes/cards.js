import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


const imgg = '../assets/circuito_arrayan_sma.jpg';

export function Cards(props) {

    const {  rutaimg } = props

    return (
        <Card style={{ paddingHorizontal: 10 }}>
            <Card.Cover source={{uri: {rutaimg}}} />
            <Card.Actions>
                <Button>Detalles</Button>
            </Card.Actions>
        </Card>
    );
}

export function Tarjetas(props) {
    const { producto, desc, img, onPres } = props

    return (
        <TouchableOpacity onPress={onPres}>
        <View style={styles.card}>
            
                <View style={styles.secimg}>
                    <Image source={{ uri: img }} style={styles.imagen}></Image>
                </View>

                <View style={styles.desc}>
                    {/* <ImageBackground source={require(imgg)} resizeMode='cover' style={styles.img}></ImageBackground> */}
                    <Image source={{ uri: img }} style={styles.img}></Image>
                    <Text style={styles.textoCard}>{producto}</Text>
                    <Text>{desc}</Text> 
                </View>

                <View>
                    <Text style={styles.text}></Text>
                </View>
            
        </View></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        width: '100%',
        height: 300,
        shadowColor: 'gray',
        shadowOpacity: 0.4,
        paddingHorizontal: 10,
        alignContent: 'center',
        alignSelf: 'center',

        
    },
    textoCard:{
        fontSize: 20,
        top: 15,
        color: 'black',
        alignSelf: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize:45,
        color: 'black',
        alignSelf: 'center',
        marginBottom: 240,

    },


    secimg: {
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        position: 'absolute',
        top: 70,
        left: 0,
        width: '100%',
        height: 210,
        borderRadius: 25
    }
})