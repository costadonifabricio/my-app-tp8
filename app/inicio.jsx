import { StyleSheet, View, Text, Button } from "react-native";
import * as React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Inicio() {
  const slide = useSharedValue(-250);
  const bgColor = useSharedValue(0);
  const fade = useSharedValue(1);

  React.useEffect(() => {
    slide.value = withTiming(0, {
      duration: 1000,
    });
  }, []);

  const handlePress = () => {
    bgColor.value = withTiming(bgColor.value === 0 ? 1 : 0, { duration: 500 });
    fade.value = withTiming(0, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: slide.value }],
    opacity: fade.value,
  }));

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: bgColor.value === 0 ? "#A8D5BA" : "#FFD700",
  }));

  return (
    <Animated.View style={[styles.container, backgroundStyle]}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>Bienvenido! 🤗</Text>
      </Animated.View>
      <Button title="Ingresar" onPress={handlePress} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
