import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants"
import Subtitulos from "../componentes/subtitulos";

const Account = () => {

    return (
        <View style={styles.container}>
            <Subtitulos
            texto = "¡Bienvenido! Has iniciado sesión con éxito">
            </Subtitulos>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})

export default Account;