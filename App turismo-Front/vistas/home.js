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
            nombre: "Kayak en San Martín de los Andes",
            img: "https://www.laninturismo.com/s/s174/fotos/fotoc-11.jpg",
            descripcion: "Nuestro lugar es uno de los lugares mas maravillosos de la Patagonia Argentina para salir a remar. Los paseos en kayak de travesía, nos permiten llegar a lugares inhóspitos y con cierta facilidad a lugares donde nadie a llegado. Vía lacustre, se accede a playas totalmente privadas para nosotros o nuestro grupo, pues las escarpadas montañas que rodean el lago hacer impensable el acceso de otra forma. De hecho, su bajo calado nos permite internarnos en zonas donde otras embarcaciones mas grande no podrían entrar. El silencioso navegar del kayak no desentona con el medio que nos rodea y lo mejor es que nos permite disfrutar de los ruidos naturales del lago o el bosque."
        },
        {
            id: 5,
            nombre: "Rafting en río Chimehuin",
            img: "https://latitur.com/uploads/media/cactus_product_tours_by_locals/416.raftingneuquen@hotmail.com/3083/03733598c9665bbd1592f64b117233967cba9a10.jpeg",
            descripcion: "Epoca: Todo el Año. (Con menos frecuencia de Mayo a Octubre) Modalidad: Rafting con o sin traslado desde San Martin o Junin de los Andes al río. Incluye: Traslado opcional hasta el río. Equipo completo con casco, Remo, Chaleco Salvavidas, Campera de río impermeable, traje de neopren, equipo de seguridad y asistencia en balsas. Seguro Accidentes Personales y RC. Refrigerio o Merienda. Que caracteriza este río? : Esta cerca de San Martin de los andes, lo cual la convierte en una excursión de medio día, con buena vista del Volcán Lanin, muy familiar y seguro, puede hacerse hasta con los mais chicos y el costo es el mas bajo de todos los raftings de la región."
        },
        {
            id: 6,
            nombre: "Cabalgatas en San Martin de los Andes",
            img: "https://www.diarioneuquen.com.ar/wp-content/uploads/2019/01/cabalagata.jpg",
            descripcion: "Tipos de cabalgatas: Standard de 2 horas, de 3 horas, Medio día y Día completo con asado. Por comunidades mapuches con guías de la comunidad. Recorrido por senderos de Montaña. Nuestro caballo y guía, nos llevarán a lugares inaccesibles por otro medio. En general, la mayoría de las rutas o caminos no son hechos para llegar a lugares de gran belleza paisajística, sino para llegar a lugares que deben ser unidos por intereses mayormente comerciales o de transporte. Esto deja afuera de nuestra vista, bellezas naturales que en ocasiones ni imaginamos, ademas de puntos de gran relevancia cultural, geológica o histórica."
        },
        {
            id: 7,
            nombre: "Mountain bike en San Martín de los Andes - Medio dia a Laguna Rosales",
            img: "https://tarifariosonline.com/cdn/travelstore/salepoint/6CILS327TMRC/services/85LB8ZTA9FGF/11.jpg",
            descripcion: "Salida desde San Martin de los Andes, subiendo por ruta 48, empalme con huella andina, mates en Laguna Rosales y bajada por RP 62 y RN40. Desde SMA hasta ruta 48 hay 2 lomas importantes, una vez en RP 48 es una subida más o menos constante. Desde ruta 48 hasta laguna Rosales es bastante empinado, inclusive varios lugares de huella andina subimos con la bici en la mano. Laguna Rosales es un lugar hermoso, para dedicarle un rato con mates o inclusive comer algo o meter una siesta. La bajada por ruta 62 es asfalto, una bajada hermosa, por tramos se va a mucha velocidad."
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