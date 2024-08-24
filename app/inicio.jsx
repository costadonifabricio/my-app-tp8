import { StyleSheet, Text, Pressable } from "react-native";
import * as React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Inicio() {
  // Estos son los valores que le pongo para las animaciones
  const deslizamiento = useSharedValue(-250);
  const colorFondo = useSharedValue(0);
  const opacidad = useSharedValue(1);

  // useEffect que controla la animación para el deslizamiento al cargar la pantalla
  React.useEffect(() => {
    deslizamiento.value = withTiming(0);
  }, []);

  // Aca Manejo el evento al presionar el botón
  const manejarPresion = () => {
    colorFondo.value = withTiming(colorFondo.value === 0 ? 1 : 0);
    opacidad.value = withTiming(opacidad.value === 1 ? 0 : 1);
  };

  const estiloAnimado = useAnimatedStyle(() => ({
    transform: [{ translateY: deslizamiento.value }],
    opacity: opacidad.value,
  }));

  // Colores para el fondo de la pantalla
  const estiloFondo = useAnimatedStyle(() => ({
    backgroundColor: colorFondo.value === 0 ? "#A8D5BA" : "#87CBB9",
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

// Estilos para el componente
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  caja: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  boton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  textoBoton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
