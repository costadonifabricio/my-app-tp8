import { StyleSheet, Text, Pressable, View } from "react-native";
import * as React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Inicio() {
  // estos valores serian para las animaciones
  const deslizamiento = useSharedValue(-250); // desplazamiento inicial para la entrada
  const colorFondo = useSharedValue(0); // el color de fondo
  const opacidad = useSharedValue(1); // la opacidad del mensaje
  const escala = useSharedValue(0.8); // la escala del mensaje para una animación de zoom

  // un useEffect para manejar la animación al cargar la pantalla
  React.useEffect(() => {
    deslizamiento.value = withTiming(0, { duration: 1000 }); 
    escala.value = withTiming(1, { duration: 1000 });
  }, []);

  // aqui manejo el evento de presionar en el botón
  const manejarPresion = () => {
    colorFondo.value = withTiming(colorFondo.value === 0 ? 1 : 0, { duration: 500 }); 
    opacidad.value = withTiming(opacidad.value === 1 ? 0 : 1, { duration: 500 }); 
  };

  // este es el estilo animado para la bienvenida
  const estiloAnimado = useAnimatedStyle(() => ({
    transform: [
      { translateY: deslizamiento.value },
      { scale: escala.value }
    ],
    opacity: opacidad.value,
  }));

  // el estilo animado para el fondo
  const estiloFondo = useAnimatedStyle(() => ({
    backgroundColor: colorFondo.value === 0 ? "#A8D5BA" : "#87CBB9", // cambia entre dos colores para el fondo
  }));

  return (
    <Animated.View style={[styles.contenedor, estiloFondo]}>
      <Animated.View style={[styles.caja, estiloAnimado]}>
        <Text style={styles.texto}>¡Bienvenido! 🤗</Text>
      </Animated.View>
      <Pressable style={styles.boton} onPress={manejarPresion}>
        <Text style={styles.textoBoton}>Ingresar</Text>
      </Pressable>
    </Animated.View>
  );
}

// los estilos para el componente
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  texto: {
    fontSize: 26, 
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  caja: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 12, 
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12, 
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    elevation: 5,
  },
  textoBoton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
