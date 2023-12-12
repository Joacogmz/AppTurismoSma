import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Botones (props)
{
    const {texto, onPres} = props
    return (
        <TouchableOpacity style={styles.boton} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

export function BotonL (props){

    const {textoL, onPres} = props
    return (
        <TouchableOpacity style={styles.botonLogin} onPress={onPres} >
            <Text style={styles.text}>
                {textoL}
            </Text>
        </TouchableOpacity>
        
    );

}

export function BotonDescuento(props){
    const {textoD, onPres} = props

    return (
            <TouchableOpacity style={styles.boton5} onPress={onPres}>
                <Text style={styles.text}>
                    {textoD}
                </Text>
            </TouchableOpacity>

    );
}

export function BotonR (props){
    const {textoR, onPres} = props

    return (
        <TouchableOpacity style={styles.botonRegistro} onPress={onPres} >
            <Text style={styles.text}>
                {textoR}
            </Text>
        </TouchableOpacity>
        
    );

}
export function Boton (props){

    const {texto, onPres} = props
    return (
        <TouchableOpacity style={styles.botonRegistro} onPress={onPres} >
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
        
    );

}

export function Link (props){

    const {texto, onPres} = props

    return (
        <View>
            <TouchableOpacity onPress={onPres}>
                <Text style={styles.link}>
                    {texto}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    botonLogin:{
        bottom: -350,
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: '85%',
        margin: 40,
        height: 50,
        alignSelf:'center',
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#024b5a',
        borderWidth: 1,
        backgroundColor: '#024b5a',
      },

      botonRegistro:{
        bottom: -350,
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: '80%',
        margin: 40,
        height: 50,
        alignSelf:'center',
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#b56f21',
        borderWidth: 1,
        backgroundColor: '#b56f21'
      },
boton:{
    backgroundColor: 'white',
    paddingVertical: 10,
    margin: 10,
    width: '90%',
    alignSelf:'center',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1
},
boton5: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '80%',
    margin: 40,
    height: 50,
    alignSelf:'center',
    borderRadius: 30,
    alignItems: 'center',
    borderColor: '#024b5a',
    borderWidth: 1,
    backgroundColor: '#024b5a',
  },
text:{
    fontSize:20,
    color: 'white',
    fontWeight: '600'
},
link: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "gray"
}
});