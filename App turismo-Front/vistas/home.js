import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Tarjetas } from "../componentes/cards";
import Constants from "expo-constants"


const Home = ({ navigation }) => {

    
    const Data = [
        
        {
            id: 1,
            nombre : "Excursión Circuito Arrayan y Cerro Chapelco",
            img: 'https://tarifariosonline.com/cdn/travelstore/salepoint/6CILS327TMRC/services/9W6D2707D5YZ/circuito_arrayan_sma.jpg',
            descripcion: 'El mirador Arrayán es uno de los puntos panorámicos más bonitos y mejor ubicados de la ciudad. De fácil acceso y cerca del centro, posee excelentes vistas del pueblo y del lago Lácar. Sumamos a esto la visita al cerro Chapelco, el centro de ski mas importante de la provincia del Neuquen, reconocido mundialmente por sus excelentes condiciones para esquiadores, desde donde podremos disfrutar de maravillosas vistas del bosque, la montaña y la cumbre del Volcan Lanin a la distancia. Un paseo para disfrutar durante todo el año. Duracion de 3 horas aproximadamente, la excursion pueden realizarse por la mañana o por la tarde.',
            img2: "../assets/chapelco2.jpg"
        },
        {
            id: 2,
            nombre: "Excursión Siete Lagos y Villa La Angostura",
            img: "https://media.viajando.travel/p/6822ac2afc85d338f57151f5f3026800/adjuntos/236/imagenes/000/472/0000472433/1200x0/smart/semana-santa-es-una-epoca-ideal-recorrer-la-ruta-los-7-lagos.jpg",
            descripcion: 'Iremos haciendo el recorrido parando en cada uno de los lagos, miradores habilitados por Parques Nacionales, Cascadas y demás sitios de interés que encontramos al pasar. Los 7 lagos son el Machónico, Falkner, Villarino, Escondido, Correntoso, Espejo y Nahuel Huapi. Llegaremos a Villa la Angostura para la hora del almuerzo, y también haremos una excursión guiada visitando todos los lugares más representativos. Además en esta localidad visitaremos los muelles, el centro cívico, Bahía Mansa, La Brava y El Messidor Residencia Oficial de la Provincia de Neuquén.'
        },
        {
            id: 3,
            nombre: "Excursión Lago Huechulafquen y Volcan Lanin",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lanin_Huechulafquen.jpg",
            descripcion: "Partiendo desde San Martin de los Andes, se visita la ciudad de Junín de los Andes y la iglesia de Laura Vicuña.Más adelante y cambiando de ruta,  llegamos a la boca del Río Chimehuín, lugar famoso entre los pescadores de todo el mundo que nace en el Lago Huechulafquen, el cual tendrá durante todo el resto del recorrido la increíble presencia del Volcán Lanín. Mas adelante y bordeando el Lago, abandonamos la zona de estepa para internarnos de lleno lo profundo del bosque andino-patagónico. Pararemos luego a almorzar en un típico restaura de campo atendido por gente de la comunidad mapuche."

        },
        {
            id: 4,
            nombre: "",
            img: "",
        },
        {
            id: 5,
            nombre: "",
            img: "",
        },
        {
            id: 6,
            nombre: "",
            img: "",
        },
        {
            id: 7,
            nombre: "",
            img: "",
        },


    ]

    return (
        
        <View style={estilos.container}>
                <Text style={estilos.titulo}>¿Qué hacer en San Martín de los Andes?</Text>

            <View style={estilos.superior}>
    
    
                <FlatList style={{padding:3}}
                    data={Data}
                        renderItem={
                            ({ item }) => <Tarjetas 
                            producto={item.nombre} 
                            img={item.img}
                            img2={item.img2}
                            descrip={item.descripcion}
                            onPres={() => navigation.navigate('Detalles',{producto : item})}
                            /> 
                        }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }} />
                      )}
                    ListHeaderComponent={<Text></Text>}
                >
                </FlatList>

            </View>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Constants.statusBarHeight,
            
        },
        superior: {
            flex: 1,
            paddingBottom:10
        },
        flat: {
            
        },
        flatti:{
            padding: 5
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: 35,
            alignItems: 'center',
            textAlign: 'center',
            top: 15,
          },
    }
)

export default Home;